"use client";

import Header from "./sharedcomponents/Navbar";
import Footer from "./sharedcomponents/Footer";
import HeroSection from "./home/Exclusive";
import Categories from "./home/Categories";
import BestSelling from "./home/BestSelling";
import PromoBanner from "./home/BrowseByCategories";
import NewArrival from "./home/NewArrivals";
import Services from "./home/Services";
import { ArrowUp } from "lucide-react";
import { FlashSales } from "./home/FlashSales";
import ExploreProducts from "./home/ExploreProducts";

export default function Index() {
  return (
    <div>
      <Header />
        <HeroSection />
        <FlashSales/>
        <Categories />
        <BestSelling />
        <PromoBanner />
        <ExploreProducts/>
        <NewArrival/>
        <Services />
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-exclusive-red hover:text-white transition-colors">
          <ArrowUp className="w-5 h-5" />
        </button>
      <Footer />
    </div>
  );
}