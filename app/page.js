import Image from "next/image";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Reviews from "./_components/Reviews";
import OurServices from "./_components/OurServices";
import ContactUs from "./_components/ContactUs";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <OurServices/>
      <Products/>
      <Reviews/>
      <ContactUs/>
      </main>
  );
}
