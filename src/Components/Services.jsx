import Card from "./Card";

const Services = () => {
  return (
    <section id="services" className="mt-16.5 ">
      <div className="wrapper">
        <h1 id="section-title" className="max-md:mb-0!">
          services
        </h1>
        <div id="service-cards">
          <div className="p-1 w-full flex justify-center items-center gap-12 flex-col m-auto md:p-6 lg:flex-row">
            {/* card1 */}
            <Card title="Basic">
              <li className="text-start">
                {">"} Custom designs tailored to your brand
              </li>
              <li className="text-start">
                {">"} Mobile-friendly, responsive layouts
              </li>
              <li className="text-start">
                {">"} Built with modern web technologies
              </li>
              <li className="text-start">
                {">"} Easy-to-manage CMS integration
              </li>
              <li className="text-start">
                {">"} SEO optimized for better visibility
              </li>
            </Card>

            {/* card2 */}
            <Card title="Standard" price={70}>
              <li className="text-start">
                {">"} <span className="text-[#e6b243] font-bold">Basic</span>
              </li>
              <li className="text-start">
                {">"} Setup and customization of platforms
              </li>
              <li className="text-start">
                {">"} Integration of secure payment gateways
              </li>
              <li className="text-start">{">"} Product catalog management</li>
              <li className="text-start">
                {">"} Smooth animation and transition
              </li>
            </Card>

            {/* card3 */}
            <Card
              title="Premium"
              crown={"👑"}
              price={200}
              CardClass={"!bg-black/80"}
              listClass={"text-white"}
            >
              <li className="text-start">
                {">"}{" "}
                <span className="text-[#e6b243] font-bold">
                  Basic + Standerd
                </span>{" "}
              </li>
              <li className="text-start">
                {">"} Bug fixing, performance optimization
              </li>
              <li className="text-start">
                {">"} 24/7 support for any technical issues
              </li>
              <li className="text-start">
                {">"} Features for better user interaction
              </li>
              <li className="text-start">{">"} Frontent + Backend</li>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
