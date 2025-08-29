import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import DumbbellShape from './DumbbellShape';
import TriangleShape from './TriangleShape';

const Hero = ({
  title = 'Unlimited graphic design service ',
  para = 'for a simple subscription monthly flat rate. No Contracts , One Price , On-Demand',
  largeScreenImg = 'md:w-4/5',
  children,
}) => {
  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
        }}
        className={`md:mx-auto w-full my-6 md:my-0 mx-0 md:mb-10 pb-20 md:pb-40 max-w-7xl items-center overflow-hidden  `}
      >
        <div className="relative flex mx-2 md:py-20 flex-col-reverse top-0 justify-center items-center md:flex-row-reverse md:mx-10 ">
          <div
            className={`mx-auto grid place-items-center top-0 mt-44 mb-50 w-full cursor-pointer md:mt-20 md:mb-20 ${largeScreenImg}`}
          >
            {/* imges */}
            {children ? (
              children
            ) : (
              <div
                className="relative m-auto mt-4 h-auto w-full"
                style={{ zIndex: 1 }}
              >
                <div className="relative m-auto shadow-[10px_10px_45px_5px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col justify-center items-center w-full scale-90 md:scale-90">
                  <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl absolute cardOne">
                    <h1 className="md:text-2xl text-xs font-bold bg-gray-100 p-4 rounded-2xl ">
                      Reduce no-shows and stay on track
                    </h1>
                    <img
                      src="./images/hero/send-reminder.webp"
                      alt="header bg cover"
                      className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl  absolute cardTwo  ">
                    <h1 className="md:text-2xl text-xs font-bold bg-gray-100 p-4 rounded-2xl ">
                      Share your booking page
                    </h1>
                    <img
                      src="./images/hero/send-book.webp"
                      alt="header bg cover"
                      className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                      loading="lazy"
                    />
                  </div>

                  {/* <div className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 playWave" />  */}
                </div>
              </div>
            )}
            {/* animation img */}
            <DumbbellShape
              className={
                'absolute w-[30rem] dumbbellShapeAnima hidden md:block'
              }
            />
            <TriangleShape
              className={
                'absolute w-[36rem] triangleShapeAnima hidden md:block'
              }
            />
          </div>

          {/* content */}
          <div className="leading-14 w-full mt-4 md:w-[40%]">
            <h1 className="text-3xl text-center text-gray-600 font-[900] w-full md:text-[3rem] md:text-start">
              {title}
            </h1>
            <p className="text-xl text-center py-4 md:text-start lg:text-2xl md:w-4/5">
              {para}
            </p>
            <Link
              to="/pricing"
              className="flex justify-center md:justify-start"
            >
              <Button
                text={'pick your plan'}
                px="30"
                py="0"
                className={'text-white uppercase'}
              />
            </Link>
          </div>
          {/* <img
            src="./images/ourpricingpage/deep-blue-squre.svg"
            alt="play"
            className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-[1000px] -top-40 -right-64 -z-30 rotateAnimation"
            loading="lazy"
          /> */}
        </div>
      </motion.header>
    </>
  );
};

export default Hero;
