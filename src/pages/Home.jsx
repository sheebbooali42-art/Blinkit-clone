import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";


export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 999,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Watch",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Watch",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Watch",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },{
      id: 2,
      name: "Watch",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },{
      id: 2,
      name: "Watch",
      price: 1999,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      {/* <Header /> */}
      <HeroSection />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

