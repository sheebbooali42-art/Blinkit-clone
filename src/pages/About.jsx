 import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      {/* Intro */}
      <p className="text-gray-600 mb-6">
        Welcome to <span className="font-semibold text-black">ShopEase</span> — your one-stop destination 
        for quality products at affordable prices. We aim to make online shopping simple, fast, and enjoyable 
        for everyone.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide customers with the best shopping experience by offering high-quality 
            products, fast delivery, and excellent customer service.
          </p>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            We aim to become a leading eCommerce platform known for trust, quality, and customer satisfaction.
          </p>
        </div>

      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Wide range of products</li>
          <li>Affordable pricing</li>
          <li>Fast and secure delivery</li>
          <li>24/7 customer support</li>
          <li>Easy returns and refunds</li>
        </ul>
      </div>

    </div>
  );
}