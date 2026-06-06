const Card = ({
  title = "Card title",
  price = 30,
  crown,
  children,
  CardClass,
  listClass,
}) => {
  return (
    <div
      className={`card w-[19rem] h-[30rem] scale-90 shadow-xl text-black relative flex justify-center items-center overflow-hidden min-[425px]:scale-100 min-[425px]:w-[22rem] ${CardClass} rounded-2xl`}
    >
      {/* h-[25rem] */}
      <div
        className=" h-60 w-60 blur-[180px] absolute"
        style={{
          background:
            "linear-gradient(41deg,rgb(236, 161, 0) 0%,rgb(255, 229, 190) 100%)",
        }}
      ></div>

      {/* card body */}
      <div className="relative card-body text-center gap-12 w-[23rem]   ">
        <h2
          className="card-title flex justify-center items-center font-bold text-transparent  bg-clip-text relative mb-12 mt-4 w-full text-3xl md:text-4xl xl:text-5xl"
          style={{
            background:
              "linear-gradient(41deg,rgb(236, 161, 0) 0%,rgb(255, 229, 190) 100%) ",
            backgroundClip: "text",
          }}
        >
          {title}
          <span
            className="font-bold text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text"
            style={{
              background:
                "linear-gradient(41deg,rgb(236, 161, 0) 0%,rgb(255, 229, 190) 100%) ",
              backgroundClip: "text",
            }}
          >
            {crown}
          </span>{" "}
          <img
            loading="lazy"
            src="./images/services/curve.png"
            alt="curve"
            className="absolute bottom-[-2.5rem] h-[3.8rem] "
            style={{
              filter:
                "invert(91%) sepia(77%) saturate(4921%) hue-rotate(333deg) brightness(77%) contrast(66%)",
              transform: "rotate(-8deg)",
            }}
          />
        </h2>
        <ul
          className={`p-2 flex justify-center flex-col items-start leading-10 text-[.9rem] ml-5 md:*text-[1rem] xl:p-0 ${listClass}`}
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Card;
