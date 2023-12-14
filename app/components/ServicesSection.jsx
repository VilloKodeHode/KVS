import Image from "next/image";
import { ServiceIcon } from "./Icons";

export const ServicesSection = () => {
  return (
    <section className="grid gap-16 mb-36">
      <h1 className="text-4xl text-center">Services</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <ServiceIcon src="bortkjøring" />
        <ServiceIcon src="forsikring" />
        <ServiceIcon src="trefelling" />
        {/* <ServiceIcon src="tilkomstteknikk" /> */}
        <ServiceIcon src="dead-tree" />
      </div>
    </section>
  );
};
