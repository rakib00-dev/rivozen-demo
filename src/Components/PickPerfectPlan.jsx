import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PickPerfectPlan = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="mx-auto w-full max-w-7xl my-20"
    >
      <div className="">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            type: 'spring',
          }}
          className={`flex flex-col justify-center gap-2 items-center mx-3 md:gap-4 md:items-start md:my-8 md:mx-12`}
        >
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            enjoy best plans
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 lg:text-start md:text-6xl md:w-4/5 lg:leading-13`}
          >
            Choose the ideal plan that suits your team's needs.
          </h2>
        </motion.div>

        <div className="flex flex-col flex-wrap justify-center items-center gap-4 md:mx-12 md:justify-start">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              type: 'spring',
            }}
            className="mx-auto my-8  w-fit max-w-screen-md text-center mb-8 lg:mb-12"
          >
            <div className="uppercase gap-2 flex justify-center items-center bg-gray-100 py-2 px-1 rounded-xl">
              <button
                className={
                  isFirstBtnActive
                    ? `uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(true);
                  setIsSecondBtnActive(false);
                  setIsThirdBtnActive(false);
                }}
              >
                monthly
              </button>
              <button
                className={
                  isSecondBtnActive
                    ? `relative uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `relative uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(false);
                  setIsSecondBtnActive(true);
                  setIsThirdBtnActive(false);
                }}
              >
                quarterly
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/save-10.svg"
                  alt="save 10 percent on monthly purchess"
                  className=" absolute hidden -top-13  md:block "
                />
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/small-save-10.svg"
                  alt="save 10 percent on monthly purchess"
                  className=" absolute -top-6 md:hidden"
                />
              </button>
              <button
                className={
                  isThirdBtnActive
                    ? `relative uppercase font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                    : `relative uppercase font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
                }
                onClick={() => {
                  setIsFirstBtnActive(false);
                  setIsSecondBtnActive(false);
                  setIsThirdBtnActive(true);
                }}
              >
                annually
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/save-20.svg"
                  alt="save 20 percent on monthly purchess"
                  className=" absolute hidden -right-20 -top-13  md:block "
                />
                <img
                  loading="lazy"
                  src="./images/ourpricingpage/card-images/small-save-20.svg"
                  alt="save 20 percent on monthly purchess"
                  className=" absolute -top-6 md:hidden"
                />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              type: 'spring',
            }}
            className="grid place-items-center gap-5 md:gap-4  md:grid-cols-4 md:w-full "
          >
            {isFirstBtnActive ? (
              <MonthlyCards />
            ) : isSecondBtnActive ? (
              <QuarterlyCards />
            ) : (
              <AnnuallyCards />
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PickPerfectPlan;

const MonthlyCards = () => {
  return (
    <>
      <HomePagePricing
        btnColor="bg-transparent border sm:text-black hover:text-gray-400"
        textColor="text-black"
      />
      <HomePagePricing
        price="250"
        title="Most Popular"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="325"
        title="Motion Graphics"
        titleSize="text-[19px]"
        borderColor="blue-500"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="599"
        title="Design Team"
        fourthColor="white"
        priceColor="white"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const QuarterlyCards = () => {
  return (
    <>
      <HomePagePricing
        price="124"
        btnColor="bg-transparent border sm:text-black hover:text-gray-400"
        textColor="text-black"
      />
      <HomePagePricing
        price="225"
        title="Most Popular"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="293"
        title="Motion Graphics"
        titleSize="text-[19px]"
        borderColor="blue-500"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="540"
        title="Design Team"
        fourthColor="white"
        priceColor="white"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const AnnuallyCards = () => {
  return (
    <>
      <HomePagePricing
        price="110"
        btnColor="bg-transparent border sm:text-black hover:text-gray-400"
        textColor="text-black"
      />
      <HomePagePricing
        price="200"
        title="Most Popular"
        btnColor="bg-black hover:bg-black/80"
        borderColor="gray-900"
        description="Get double the output everyday."
      />
      <HomePagePricing
        price="250"
        title="Motion Graphics"
        titleSize="text-[19px]"
        borderColor="blue-500"
        description="Collaborate in real time with your designer."
        btnColor="bg-blue-500 hover:bg-blue-400"
      />
      <HomePagePricing
        price="480"
        title="Design Team"
        fourthColor="white"
        priceColor="white"
        bgColor="bg-[#0b3558]"
        lastColor={'text-white'}
        descColor="white"
        borderColor="gray-900"
        btnColor="bg-transparent border hover:text-gray-300"
        description="Collaborate in real time with your designer."
      />
    </>
  );
};

const HomePagePricing = ({
  title = 'Advanced',
  description = 'Create all of your everyday designs.',
  titleSize = 'text-xl',
  price = '138',
  bgColor = 'bg-white',
  textColor = 'text-white',
  priceColor = 'gray-900',
  btnText = 'View More',
  borderColor = 'gray-300',
  descColor = 'gray-500',
  lastColor,
  btnColor = 'bg-black',
  children,
  fourthColor,
}) => {
  return (
    <div className={`w-[260px] mx-2 rounded-2xl relative md:w-[270px]`}>
      {/* initial wraper */}
      <div
        className={`border border-t-8 rounded-2xl h-[337px] px-4 py-5 gap-4 grid ${bgColor} border-${borderColor}`}
      >
        {children}
        <div className={`grid gap-4 pb-5 ${lastColor}`}>
          <h5
            className={`font-extrabold ${titleSize}`}
            style={{ color: `${fourthColor}` }}
          >
            {title}
          </h5>
          <p className={`text-lg text-${descColor}`}>{description}</p>
          <h5
            className={`text-3xl mt-8 font-extrabold text-${priceColor}`}
            style={{ color: `${fourthColor}` }}
          >
            ${price}
            <span className="text-lg">/mo</span>
          </h5>
        </div>
        <div className="grid w-full place-items-center mb-5">
          <Link
            to={'/pricing'}
            className={`transition-all ${textColor} text-center py-2 px-4 rounded-xl md:text-md sm:w-full ${btnColor}`}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
