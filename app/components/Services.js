"use client";
import Image from "next/image";
import services from "./images/services.png";
import './services.css';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#05173F] underline decoration-[#F7D756]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <Image src={services} alt="Our services" width={500} />
          </div>

          {/* Right Column: Services List */}
          <div className="flex justify-center items-center">
            <ol className="olcards space-y-6">
              <li style={{ '--cardColor': '#36aeb3' }}>
                <div className="content">
                  <div className="icon">😀</div>
                  <div className="title">Fintex Consumer Durable Loans</div>
                  <div className="text">
                    Buy now, pay later for electronics, home appliances, and more. Get the latest technology without straining your wallet.
                  </div>
                </div>
              </li>
              <li style={{ '--cardColor': 'green' }}>
                <div className="content">
                  <div className="icon">😁</div>
                  <div className="title">Fintex Instant Short-Term Loans</div>
                  <div className="text">
                    Need cash fast? Our short-term loans provide immediate access to funds for any urgent financial need.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
