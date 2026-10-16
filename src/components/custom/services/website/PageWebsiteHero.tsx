import CommonHeroSection from "@/components/common/CommonHeroSection";

export default function PageWebsiteHero() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Get in touch"
        bigHeading={["Have a", "project"]}
        bigHeadingItalic="in mind?"
        paragraph="Tell us a little about what you're building, what you need, and where you want to go. We'll take it from there."
        primaryBtn="Start a conversation"
        primaryBtnLink="/contact"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />
    </>
  );
}
