import { CiFacebook, CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1
          id="section-title"
          className="text-3xl font-semibold mb-10 text-center"
        >
          Let's Talk
        </h1>

        <div
          id="footer-content"
          className="flex justify-center items-center mb-8"
        >
          <p className="w-full text-left text-gray-700 md:w-3/5 md:text-center">
            Let's talk and set our meeting time through Calendly and meeting
            platforms like Zoom and Google meet. Boost your business. Please
            message me through any of these platforms to get a 300-second quick
            meeting.
          </p>
        </div>

        <form
          id="form"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mx-auto w-full mt-8 mb-8 relative md:w-3/5"
        >
          <input
            type="hidden"
            name="access_key"
            value="976bc72c-dbf7-4ac7-8528-24eeb7f396a8"
          />
          <div id="name-email-container" className="flex gap-4 mb-4">
            <div id="name-container" className="w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
                className="p-3 border border-gray-300 rounded-2xl w-full mt-1"
              />
            </div>
            <div id="email-container" className="w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="p-3 border border-gray-300 rounded-2xl w-full mt-1"
              />
            </div>
          </div>

          <div id="message-container" className="w-full mb-4">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
              spellCheck="false"
              className="p-3 border border-gray-300 rounded-2xl w-full h-32 mt-1 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-2xl w-full mt-6 hover:bg-white hover:text-yellow-500 border border-gray-300 transition cursor-pointer "
          >
            Submit
          </button>
        </form>

        <div className="w-fit flex justify-center items-center gap-3 bg-gray-200 p-4 rounded-full  mx-auto mt-12">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rakib-dev/"
            className="p-2 text-xl bg-gray-300 rounded-full transition-all hover:bg-gray-400 md:text-4xl"
          >
            <CiLinkedin />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/rejoanul.hasan.rakib/"
            className="p-2 text-xl bg-gray-300 rounded-full transition-all hover:bg-gray-400 md:text-4xl"
          >
            <CiFacebook />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/rakib.developer"
            className="p-2 text-xl bg-gray-300 rounded-full transition-all hover:bg-gray-400 md:text-4xl"
          >
            <CiInstagram />
          </a>
          <a
            target="_blank"
            href="mailto:rakib00.dev@gmail.com"
            className="p-2 text-xl bg-gray-300 rounded-full transition-all hover:bg-gray-400 md:text-4xl"
          >
            <CiMail />
          </a>
          <a
            target="_blank"
            href="https://wa.me/+8801904285606"
            className="p-2 text-xl bg-gray-300 rounded-full transition-all hover:bg-gray-400 md:text-4xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
