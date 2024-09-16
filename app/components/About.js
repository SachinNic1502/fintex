"use client";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10 text-[#05173F] underline decoration-[#F7D756]">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Image Section */}
          <div className="relative flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              className="object-cover"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
              alt="Main"
              width={500}
              height={250}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-4 space-y-6">
            <p className="text-base lg:text-lg text-[#05173F]">
              Welcome to{" "}
              <span className="font-bold text-[#F7D756]">Fintex</span>, your
              trusted partner in financial empowerment. We specialize in
              offering tailored financial services that make life easier,
              whether you're looking to buy the latest electronics or need
              immediate cash for short-term expenses.
            </p>
            <p className="text-base lg:text-lg text-[#05173F]">
              At <span className="font-bold text-[#F7D756]">Fintex</span>, we
              believe in simplifying finance. Our{" "}
              <span className="font-bold text-[#F7D756]">
                Consumer Durable Loans
              </span>{" "}
              allow you to purchase smartphones, laptops, appliances, and more,
              with flexible repayment options that suit your budget. For those
              unexpected moments, our{" "}
              <span className="font-bold text-[#F7D756]">
                Instant Short-Term Loans
              </span>{" "}
              offer quick, hassle-free access to funds when you need them most.
            </p>
            <p className="text-base lg:text-lg text-[#05173F]">
              We are committed to providing fast, transparent, and accessible
              financial solutions to help you meet your personal and financial
              goals. With <span className="font-bold text-[#F7D756]">Fintex</span>, you can count on seamless support, minimal
              paperwork, and a customer-first approach every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
