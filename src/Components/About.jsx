import './about.css';

const About = () => {
  return (
    <section id="about-section" className="pt-16 pb-30">
      <div className="container mx-auto px-4">
        <h1 id="section-title">About Me</h1>
        <div
          id="about-content"
          className="flex flex-wrap justify-center items-center gap-8"
        >
          <div
            id="about-img-wrap"
            className="border border-gray-300 rounded-full w-64 h-64 flex justify-center items-center overflow-hidden"
          >
            <img
              src="./images/about/rakib_web_developer.png"
              alt=""
              className="h-[348px] -mb-12"
              loading="lazy"
            />
          </div>
          <div id="about-text" className="w-96 grid gap-4">
            <h1 className="text-3xl font-bold mb-2">
              Md Rejoyanul Hasan Rakib
            </h1>
            <p className="text-gray-600">A bit about me.</p>
            <p className="text-gray-700">
              I'm pursuing a Computer Science & Technology degree in diploma
              polytechnic. I have my own rules and aims for my life. I want to
              be a perfect Web engineer who can contribute to society and help
              others grow their business.
            </p>
            <span className="text-gray-600">
              Email:{' '}
              <a
                href="mailto:rakib00.dev@gmail.com"
                className="text-yellow-500 emailBorderEffect"
              >
                rakib00.dev@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
