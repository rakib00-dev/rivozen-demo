import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

function CustomersTought() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: "spring",
      }}
      className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white  "
    >
      <div className="flex m-auto justify-center items-center flex-col w-full gap-4 ">
        <div
          className={`flex flex-col justify-center pb-5 gap-2 items-center lg:gap-4`}
        >
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            wall of love
          </p>
          <h2
            className={`font-extrabold text-[1.85rem] w-full md:w-[30rem] mb-4 leading-8 text-center md:text-5xl lg:leading-13`}
          >
            See what customers have to say
          </h2>
        </div>

        {/* slide container */}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: "spring",
          }}
          className="mx-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-6"
        >
          {/* <Slider {...settings}> */}
          <Cards />
          {/* </Slider> */}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CustomersTought;

const Cards = () => {
  const data = [
    {
      img: "/images/walloflove/nextgen.svg",
      name: "David W.",
      position: "Sr. Director, Managed Cloud Services",
      p: "Using Calendly has made my life as a recruiter much easier by speeding up the process of scheduling the multiple interviews I have each week. One feature that stands out is the ability to type in all the questions for potential candidates before speaking to a potential candidate - it really saves time! Another great convenience is that when I make changes in Outlook, my schedule automatically updates. It's an easy-to-use platform and I'd be completely disorganised without it.",
    },
    {
      img: "/images/walloflove/TransPerfect.svg",
      name: "Alice M.",
      position: "Senior Growth Analyst",
      p: "Calendly streamlines the appointment scheduling process in my department by removing the need for manual back-and-forth communication. By integrating Calendly into our sales process, clients can easily book appointments with a sales representative at any stage of their engagement with our products and services.",
    },
    {
      img: "/images/walloflove/airwallex-customer-logo.svg",
      name: "Leena S.",
      position: "Product Lifecycle Management Specialist",
      p: "Calendly is instrumental in providing our customers with a seamless scheduling experience when interacting with our team. By taking the burden of scheduling off our shoulders, Calendly has enabled us to accelerate our sales cycle and streamline the scheduling process with the greater goal of continuous business growth.",
    },
    {
      img: "/images/walloflove/etisalat-logo.svg",
      name: "Bolaji H.",
      position: "Senior Data Scientist",
      p: "Coordinating and setting up meetings with stakeholders and team members in an organization like mine, is one task I find very cumbersome. Thanks to Calendly, I am having to do less in this aspect by setting up automated reminders and notifications for scheduled meetings. This eliminates the need for manual follow-ups and ensures that all participants are well-prepared and punctual for every scheduled meeting.",
    },
    {
      img: "/images/walloflove/ci-assante-customer-logo.svg",
      name: "Asiya Khan",
      headshot: "/images/walloflove/Asiya_Khan.png",
      position: "Manager, Branch and Business Practice",
      p: "The biggest BIGGEST thing that Calendly is solving for us is saving us an enormous amount of time when it comes to scheduling meetings - from the back and forth of finding a time that works, to actually sending an invite to the meeting with meeting details, to reminders/notifications to clients and hosts. For peace of mind, Calendly is worth every penny.",
    },
    {
      img: "/images/walloflove/4star.svg",
      name: "Heather S.",
      position: "Learning & Communications Specialist",
      p: "It does a marvelous job of putting my whole sales process in order. I really appreciate the automated data flows of several other applications that Salesforce enables us to use. With these apps, I will work in Salesforce and send mass emailing When I am reading, these emails are still being watched.",
    },
  ];

  return (
    <>
      {data.slice(0, 1).map((e, i) => (
        <div
          key={i}
          className="gird md:row-span-3 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}
      {data.slice(1, 2).map((e, i) => (
        <div
          key={i}
          className="grid md:row-span-2 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}
      {data.slice(2, 3).map((e, i) => (
        <div
          key={i}
          className="grid md:row-span-2 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}
      <div className="grid place-items-center relative md:-top-63 col-start-1 row-start-4 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 bg-gray-100">
        <img
          src="/images/walloflove/G2_Crowd_logo.svg"
          alt=""
          className="pt-7"
          loading="lazy"
        />
        <div className="flex gap-2">
          <img
            src="/images/walloflove/start.png"
            alt=""
            className="py-2"
            loading="lazy"
          />
          <img
            src="/images/walloflove/star.png"
            alt=""
            className="py-2 w-7"
            loading="lazy"
          />
          <img
            src="/images/walloflove/star.png"
            alt=""
            className="py-2 w-7"
            loading="lazy"
          />
          <img
            src="/images/walloflove/star.png"
            alt=""
            className="py-2 w-7"
            loading="lazy"
          />
          <img
            src="/images/walloflove/half-star.png"
            alt=""
            className="py-2 w-7"
            loading="lazy"
          />
        </div>
        <p>4.7 out of 5</p>
      </div>

      {data.slice(3, 4).map((e, i) => (
        <div
          key={i}
          className="grid relative md:-top-24 md:row-span-2 md:col-start-2 md:row-start-3 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}
      {data.slice(4, 5).map((e, i) => (
        <div
          key={i}
          className="grid relative md:-top-24 md:row-span-2 md:col-start-3 md:row-start-3 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}

      {data.slice(5, 6).map((e, i) => (
        <div
          key={i}
          className="grid mt-12 relative md:-top-24 md:row-span-2 md:col-start-1 md:row-start-4 top-0 w-full h-fit border border-gray-300 p-7  pt-0 text-center md:mb-5 rounded-lg gap-2 leading-10"
        >
          <div className="flex justify-between w-full py-7">
            <img src={e.img} alt="" loading="lazy" className="w-42" />
            <FaQuoteLeft />
          </div>
          <div className="flex flex-col">
            <h5
              className="text-xs  text-start md:text-start"
              style={{ color: "#0b3558c3" }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: "gray" }}
            >
              {e.position}
            </p>
          </div>
          <p className="text-xl leading-6 text-start md:text-start">{e.p}</p>
        </div>
      ))}
    </>
  );
};
