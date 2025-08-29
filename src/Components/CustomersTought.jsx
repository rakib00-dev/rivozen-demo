import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

function CustomersTought() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
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
            type: 'spring',
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
      img: '/images/walloflove/nextgen.svg',
      name: 'David W.',
      position: 'Sr. Director, Managed Cloud Services',
      p: 'Designpro makes my life so much easier. With no design team in house, I know I can still get quality designs created quickly and always have beautiful promotional materials ready to go.',
    },
    {
      img: '/images/walloflove/TransPerfect.svg',
      name: 'Alice M.',
      position: 'Senior Growth Analyst',
      p: 'Love my Designpro team! Wonderful designs, communication is excellent and so easy to deal with',
    },
    {
      img: '/images/walloflove/airwallex-customer-logo.svg',
      name: 'Leena S.',
      position: 'Product Lifecycle Management Specialist',
      p: 'Designpro is great period… The platform is so simple to use… The more designs you request, the more value Designpro offers. You just have to be the one that gets the most value out of them.',
    },
    {
      img: '/images/walloflove/etisalat-logo.svg',
      name: 'Bolaji H.',
      position: 'Senior Data Scientist',
      p: 'Designpro allowed our agency to start offering more services… The versatility of the platform – static graphic, animated video, avatar creation, so much more!',
    },
    {
      img: '/images/walloflove/ci-assante-customer-logo.svg',
      name: 'Asiya Khan',
      headshot: '/images/walloflove/Asiya_Khan.png',
      position: 'Manager, Branch and Business Practice',
      p: 'I also really like that Designpro gives you a designated designer… ensures… someone becomes very familiar with your brand… helps things go more smoothly.”',
    },
    {
      img: '/images/walloflove/4star.svg',
      name: 'Heather S.',
      position: 'Learning & Communications Specialist',
      p: 'The biggest selling point… quality of the designs and the customer service. Everyone I interacted with was happy to help…” And “Most requests produced within a 24‑hour turnaround.',
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
              style={{ color: '#0b3558c3' }}
            >
              {e.name}
            </h5>
            <p
              className="text-xs font-medium text-start md:text-start"
              style={{ color: 'gray' }}
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
