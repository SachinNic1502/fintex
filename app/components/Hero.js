import Mobile_App from "./images/Mobile_App.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-cover bg-center text-center py-20 bg-[#05173F] h-[680px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex items-center justify-center md:justify-center">
            <h1 className="leading-snug">
              <span className="text-2xl md:text-5xl font-bold mb-5 text-white">
                Sometimes
              </span>{" "}
              <br />
              <span className="text-2xl md:text-5xl font-bold mb-5 text-white">
                Money Can
              </span>
              <br />
              <span className="text-2xl md:text-5xl font-bold mb-5 text-white">
                Be Confusing.
              </span>
              <br />
              <span className="text-sm md:text-xl text-[#F7D756]">
                Fintex – Empowering Your Dreams with Fast,
                <br /> Flexible Finance.
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={Mobile_App}
              alt="Mobile App Preview"
              width={400}
              height={300}
              className="w-full h-auto md:w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
