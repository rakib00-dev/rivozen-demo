import CommonHeroSection from "@/components/common/CommonHeroSection";

export default function PageWebsiteHero() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Web Design"
        bigHeading={["Web Design & Development", "That Turns Visitors"]}
        bigHeadingItalic="Into Customers"
        paragraph="RivoZen is a digital growth agency that designs and builds fast, mobile-first, SEO-ready websites for ecommerce brands and local businesses. From Shopify and WordPress to custom Next.js builds, every site is made to rank on Google and turn visitors into customers."
        primaryBtn="Get a Free Website Quote"
        primaryBtnLink="/pricing"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />
    </>
  );
}
