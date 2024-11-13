import { Button } from "@/components/ui/button";
import React from "react";

const LandingPageii = () => {
  return (
    <div className="flex flex-col items-center p-16">
      {/* First Section */}
      <div className="flex flex-col items-center w-3/4 text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#2711F1] mb-4">
          Why Authentic Chain?
        </h1>
        <p className="text-lg text-gray-700">
          Authentic Chain is a blockchain-based product authentication system
          designed to combat counterfeiting and ensure product originality
          across multiple industries. The platform leverages Layer 2 blockchain
          technology (Optimism/Arbitrum) to provide a scalable, cost-effective
          solution for brands and consumers.
        </p>
      </div>

      {/* Feature Section */}

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-10  p-4 lg:p-16 lg:space-x-28">
  <img
    src="/group.png"
    alt="Combat Counterfeiting"
    className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
  />
  <div className="flex flex-col text-left h-full">
    <p className="text-4xl lg:text-8xl text-[#2711F1] font-light mb-7">
      Combat Counterfeiting
    </p>
    <p className="text-2xl lg:text-4xl text-gray-700 w-full lg:w-[90%] xl:w-[80%] mb-14">
      Implementing tamper-proof identification and creating a verifiable
      product history, we enable instant authenticity verification for
      secure and transparent product tracking. This ensures
      .....................
    </p>
    <Button className="bg-[#2711F1] text-white rounded-[20px] w-full lg:w-[40%] xl:w-[15%]">
      Read More
    </Button>
  </div>
</div>


      {/* Feature 2 */}
      <div className="flex flex-col items-center w-1/3 text-center">
        <img
          src="/path-to-enhance-supply-chain.jpg"
          alt="Enhance Supply Chain"
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-[#2711F1] mb-2">
          Enhance Supply Chain Transparency
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Track the complete journey of each product from manufacture to
          consumer, recording every ownership transfer and monitoring
          conditions.
        </p>
        <Button className="bg-[#2711F1] text-white rounded-[20px]">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default LandingPageii;
