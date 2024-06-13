import Image from "next/image";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Reviews from "./_components/Reviews";
import Section from "./_components/Section";
import OurServices from "./_components/OurServices";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Section title="خدماتنا" desc="خدماتنا عديدة و مميزة و كما تمتاز بجودة عالية عن منافسينا"/>
      <OurServices/>
      <Section title="منتجاتنا" desc="تصفح منتجاتنا و اختر الهدية المناسبة" />
      <Products/>
      <Section title="تقييمات عملائنا " desc="هنا بعضا من تقييمات العملاء بعد التعامل معنا"/>
      <Reviews/>
      <Section title="تواصل معنا" desc="تواصل معنا للاستفسار و طلب خدماتنا عبر وسائل التواصل التالية"/>
    </main>
  );
}
