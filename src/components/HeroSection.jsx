import React from 'react'

   const HeroSection = () => {
  return (
    <section
      className="w-full h-[60vh] flex items-center justify-center text-black bg-amber-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
        <p className="mb-6">Best deals on amazing products</p>
        <button className="bg-white px-6 py-2 rounded font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;