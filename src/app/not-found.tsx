import { Navbar } from "@/components/custom/navbar";
import "./globals.css";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { CtaFooter } from "@/components/custom/cta-footer";
import { Reveal } from "@/components/custom/reveal";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <Reveal>
        <div className="flex justify-center items-center font-[arial] flex-col h-screen">
          <div className="flex justify-center items-center h-full text-center flex-col">
            <h2 className="font-bold text-5xl flex gap-3 items-center">
              <TriangleAlert className="size-10" /> 404 - Page Not Found
            </h2>
            <p className="pb-2 text-md pt-0.5">
              Could not find the requested resource.
            </p>
            <div className="flex flex-col items-start pt-2">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-1.5 rounded-lg text-primary px-7 py-3.5 text-base font-medium bg-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                Return Home
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 " />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
      <CtaFooter />
    </div>
  );
}
