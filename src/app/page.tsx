import ReactLenis from "lenis/dist/lenis-react";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Testimonial from "../Components/Testimonial";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,

          // smoothTouch: false,
          touchMultiplier: 2,
        }}
      >
        {/* <div className="cursor" ref={cursor}></div> */}
        <Header />
        {/* <Skills /> */}
        <Carousel />
        <Testimonial />
        <Services />
        <Projects />
        <About />
        <Footer />
      </ReactLenis>
    </>
  );
}
