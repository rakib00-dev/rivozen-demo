import React, { Suspense } from "react";
import SolutionHeader from "../Components/Solutions-Components/OldSolutionHeader";
import PricingFaq from "../Components/PricingPage/PricingFaq";
import CustomersTought from "../Components/CustomersTought";
// const BetterSolution = React.lazy(() => import('../Components/BetterSolution'));
const AutoChangeContent = React.lazy(() =>
  import("../Components/AutoChangeContent")
);
const Carousel = React.lazy(() => import("../Components/Carousel"));
const ClientReview = React.lazy(() => import("../Components/ClientReview"));
const Hero = React.lazy(() => import("../Components/Hero"));
const HowItWorks = React.lazy(() => import("../Components/HowItWorks"));
const NeedDesignerSoon = React.lazy(() =>
  import("../Components/NeedDesignerSoon")
);
const OurTools = React.lazy(() => import("../Components/OurTools"));
const OurWork = React.lazy(() => import("../Components/OurWork"));
const PowerByTechnology = React.lazy(() =>
  import("../Components/PowerByTechnology")
);

const PickPerfectPlan = React.lazy(() =>
  import("../Components/PickPerfectPlan")
);
const SolutionHomeSection = React.lazy(() =>
  import("../Components/SolutionHomeSection")
);
const SendReqSection = React.lazy(() => import("../Components/SendReqSection"));
// const WallOfLove = React.lazy(() => import('../Components/WallOfLove'));
const WhatWeOffer = React.lazy(() => import("../Components/WhatWeOffer"));

const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Suspense fallback={<p>Loading...</p>}>
        <SolutionHomeSection />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PickPerfectPlan />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <AutoChangeContent />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <NeedDesignerSoon /> */}
        {/* <BetterSolution /> */}
        <HowItWorks />
        <AutoChangeContent
          mainTitle="The Ultimate Creative Solution For:"
          mainPara="This will go in the places on the right hand side the heading and the content and the pictures for the content"
          changeAlignment="flex md:flex-row-reverse md:gap-10"
          fristTitle="Marketers"
          firstPara="whether you have a graphic designer on staff who needs support or you are a one-person show handling the creative on your own, Designpro can help you get to outcomes faster."
          secondTitle="Agencies"
          secondPara="Multiply your agency output without multiplying your overhead costs. Designpro is a flexible solution that works with your ever-changing client demands. "
          thirdTitle="Entrepreneurs"
          thirdPara="Flat-rate graphic design to help you grow your business. Whether you’re just starting a business or in a growth phase, Designpro is an affordable way to outsource your creative needs."
          fourthTitle="Photographers"
          fourthPara="We have our very own photoshop experts ready to edit and make changes to all your photos all with just a few clicks designpro will have your photos edited and ready for customers in a day."
          fifthTitle="Creative deliverables in days, not weeks"
        />
        {/* <PowerByTechnology /> */}
        {/* <WhatWeOffer /> */}
        {/* <OurWork /> */}
        <CustomersTought />
        <OurTools />
        {/* <WallOfLove /> */}
        <PricingFaq />
        <ClientReview />
        <SendReqSection />
      </Suspense>
    </>
  );
};

export default HomePage;
