import CommonSection from "@/components/common/CommonSection";

function BookCalenderSection() {
  return (
    <div>
      <CommonSection
        bigHeading="Big!!!"
        bigHeadingItalic="Big Italic!!"
        smallHeading="Hahahaa"
        content={<div>This the content of the site</div>}
        arrow
      />
    </div>
  );
}

export default BookCalenderSection;
