// const Testimonial = () => {
//   return (
//     <section id="testimonial-section" className="bg-gray-100/70 pb-10">
//       <div className="mt-[4.125rem] lg:mt-[8.125rem] p-4 py-10 w-full max-w-7xl mx-auto ">
//         <h1 id="section-title">Testimonial</h1>
//         <div
//           // id="testimonial-wrap"
//           className="flex flex-col justify-center items-center "
//         >
//           <img
//             src="./images/testimonial/review.png"
//             alt="review"
//             className="w-full border border-black/10 rounded-lg shadow-xl md:w-[60%]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <section className="mb-20 text-black py-10">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 grid md:gap-15 gap-3">
        <div className="py-6 grid place-items-center w-full gap-3 md:pr-15 mb-5 rounded relative">
          <h1
            id="section-title"
            className="!mb-0"
            // className="text-3xl inline font-extrabold text-white sm:text-4xl md:text-6xl"
          >
            Testimonials
          </h1>
          {/* <p className="text-gray-500">
            Some reviews{" "}
            <span className="pb-2 border-b-4 border-[var(--primary-color)]">
              from our
            </span>{" "}
            course buyers
          </p> */}
          <div
            className=" h-60 w-60 blur-[220px] absolute"
            style={{ background: "var(--logo-gradient)" }}
          ></div>
        </div>

        <div className="flex flex-col justify-start gap-5 md:mx-20 md:h-[200svh]">
          <TestimonialCard
            src="/images/testimonial/jenifer.jpeg"
            p="Overall a solid Work. The communication was clear and well-structured, though I wish there were more real-world case studies. Still, it gave me a strong foundation to build on."
            name="Jennifer Diaz"
            title="SEO Work"
          />
          <TestimonialCard
            src="/images/testimonial/testimonial-03-free-img.jpg"
            p="This work exceeded my expectations! The instructor explained complex topics in a simple way, and the examples were very practical. I feel much more confident working with him."
            name="Jannete Adams"
            fiveStar
          />

          <TestimonialCard
            src="/images/testimonial/jems.jpeg"
            p="Absolutely worth the time! The pacing was perfect, and the assignments really helped me done my work. I would definitely recommend his works toh others."
            name="Jason Gold"
          />
          <TestimonialCard
            src="/images/testimonial/testimonial-07-free-img.jpg"
            p="The work had good effect, but some sections felt rushed and lacked detail. With a bit more depth and updated resources, it could be excellent."
            name="Kate Eddison"
            title="Shopify Store"
            fiveStar
          />
          {/* <BackgroundBlur /> */}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  src,
  p = "The secrets of cakes",
  fiveStar = false,
  title = "Website Design",
  name,
  borderCss = "border-black",
}) => {
  return (
    <div className="sticky md:h-screen top-15">
      <div className="h-auto lg:h-70 relative bg-gradient-to-r from-yellow-500/50 to-yellow-300/50 w-full shadow-lg text-white flex flex-col justify-center items-center py-5 rounded-2xl card">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />
        <div
          className=" h-60 w-60 blur-[220px] absolute"
          style={{ background: "var(--logo-gradient)" }}
        ></div>
        <div className="grid place-items-center py-2">
          {/* <img
          src={src}
          alt={src}
          width={60}
          height={60}
          // style={{ width: '100%', height: 'auto' }}
          className="rounded-full"
        /> */}
          <h5 className="text-black font-bold">{name}</h5>
          <span className="text-black ">{title}</span>
        </div>
        <span className="flex gap-1 justify-start items-center font-medium">
          {fiveStar ? (
            <>
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
            </>
          ) : (
            <>
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaStar className="fill-slate-700 text-2xl" />
              <FaRegStarHalfStroke className="fill-slate-700 text-2xl" />
            </>
          )}
        </span>
        <p className="text-black text-sm md:px-42 px-3 md:text-md lg:text-xl py-4 text-center">
          {p}
        </p>
      </div>
    </div>
  );
};

const BackgroundBlur = ({ blur = "blur-[220px]", size = "size-60" }) => {
  return (
    <div
      className={`${size} ${blur} absolute`}
      style={{ background: "var(--logo-gradient)" }}
    ></div>
  );
};

export default Testimonial;
