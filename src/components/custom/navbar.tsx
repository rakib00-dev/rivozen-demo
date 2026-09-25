"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Services",
    href: "/services",
    subMenu: [
      {
        label: "Web Design & Development",
        href: "/services/web-design-development",
      },
      {
        label: "SEO",
        href: "/services/seo",
      },
      {
        label: "Paid Advertising",
        href: "/services/paid-advertising",
      },
      {
        label: "Content & Creative",
        href: "/services/content-creative",
      },
      {
        label: "Email & SMS Marketing",
        href: "/services/email-sms-marketing",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
      {
        label: "Business Growth Strategy",
        href: "/services/business-growth-strategy",
      },
      {
        label: "Workflow AI Automation",
        href: "/services/workflow-ai-automation",
      },
    ],
  },

  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "Work",
    href: "/work",
  },

  {
    label: "Why Us",
    href: "/why-us",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  // Mobile Services submenu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 26);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*
   * Check whether a navigation item is active.
   *
   * Examples:
   *
   * /pricing
   *    => Pricing active
   *
   * /services/seo
   *    => Services active
   *
   * /services/web-design-development
   *    => Services active
   */
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /*
   * Check whether a submenu item is active.
   */
  const isSubMenuActive = (href: string) => {
    return pathname === href;
  };

  /*
   * Close mobile navigation.
   */
  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`${
        scrolled ? "fixed" : "absolute"
      } inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 md:px-6 font-[arial]`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-colors duration-300 ${
          scrolled
            ? "border-border bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* ========================================
            LOGO
        ========================================= */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-danger" aria-hidden />

          <Image
            src="/rivozen_black.png"
            alt="Rivozen"
            width={40}
            height={40}
            style={{
              width: "auto",
              height: "auto",
            }}
            className="w-152"
          />

          <span className="text-lg font-semibold tracking-tight max-md:hidden">
            Rivozen
          </span>
        </Link>

        {/* ========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = isActive(l.href);

            return (
              <li key={l.href} className="group relative">
                {l.subMenu ? (
                  <>
                    {/* Services Parent */}
                    <Link
                      href={l.href}
                      className={`flex items-center gap-1.5 py-2 text-sm transition-colors ${
                        active
                          ? "font-medium text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          active ? "text-primary" : ""
                        } group-hover:rotate-180`}
                      />
                    </Link>

                    {/* ====================================
                        DESKTOP SERVICES SUBMENU
                    ===================================== */}
                    <div
                      className="
                        invisible
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-72
                        -translate-x-1/2
                        translate-y-2
                        pt-3
                        opacity-0
                        transition-all
                        duration-200

                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div className="overflow-hidden rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                        {l.subMenu.map((sub) => {
                          const subActive = isSubMenuActive(sub.href);

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                                subActive
                                  ? "bg-primary/10 font-medium text-primary"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Regular Desktop Link */
                  <Link
                    href={l.href}
                    className={`block py-2 text-sm transition-colors ${
                      active
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* ========================================
            DESKTOP CTA
        ========================================= */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/book-a-call"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book A Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ========================================
            MOBILE MENU BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* ============================================
          MOBILE MENU
      ============================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-50 overflow-y-auto bg-foreground/95 backdrop-blur-md md:hidden"
          >
            {/* ========================================
                MOBILE HEADER
            ========================================= */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 pt-7">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-lg font-semibold text-background"
              >
                Rivozen
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ========================================
                BOOK A CALL
            ========================================= */}
            <div className="mx-6 mt-8">
              <Link
                href="/book-a-call"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-background py-4 text-base font-medium text-foreground"
              >
                Book A Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ========================================
                MOBILE NAVIGATION
            ========================================= */}
            <ul className="mt-10 flex flex-col gap-1 px-6 pb-16">
              {links.map((l, i) => {
                const active = isActive(l.href);

                return (
                  <motion.li
                    key={l.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.05 * i + 0.1,
                    }}
                  >
                    {l.subMenu ? (
                      <div>
                        {/* ==================================
                            SERVICES MOBILE HEADER
                        =================================== */}
                        <div className="flex items-center justify-between">
                          <Link
                            href={l.href}
                            onClick={closeMobileMenu}
                            className={`py-3 text-4xl font-medium tracking-tight transition-colors ${
                              active ? "text-primary" : "text-background"
                            }`}
                          >
                            {l.label}
                          </Link>

                          {/* Submenu Toggle */}
                          <button
                            type="button"
                            onClick={() =>
                              setMobileServicesOpen((prev) => !prev)
                            }
                            aria-label={
                              mobileServicesOpen
                                ? "Close Services submenu"
                                : "Open Services submenu"
                            }
                            aria-expanded={mobileServicesOpen}
                            className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                              active ? "text-primary" : "text-background"
                            }`}
                          >
                            <ChevronDown
                              className={`h-7 w-7 transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* ==================================
                            MOBILE SERVICES SUBMENU
                        =================================== */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 ml-3 flex flex-col border-l border-background/20 pl-5">
                                {l.subMenu.map((sub, subIndex) => {
                                  const subActive = isSubMenuActive(sub.href);

                                  return (
                                    <motion.div
                                      key={sub.href}
                                      initial={{
                                        opacity: 0,
                                        x: -10,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        delay: subIndex * 0.03,
                                      }}
                                    >
                                      <Link
                                        href={sub.href}
                                        onClick={closeMobileMenu}
                                        className={`block py-2.5 text-lg transition-colors ${
                                          subActive
                                            ? "font-medium text-primary"
                                            : "text-background/70 hover:text-background"
                                        }`}
                                      >
                                        {sub.label}
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* ==================================
                          REGULAR MOBILE LINK
                      =================================== */
                      <Link
                        href={l.href}
                        onClick={closeMobileMenu}
                        className={`block py-3 text-4xl font-medium tracking-tight transition-colors ${
                          active ? "text-primary" : "text-background"
                        }`}
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
