import React from "react";
export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      desc: "Get your products delivered quickly at your doorstep."
    },
    {
      title: "Best Quality",
      desc: "We provide top-quality products at affordable prices."
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available anytime to help you."
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free return policy for customer satisfaction."
    },
        {
      title: "Easy Returns",
      desc: "Hassle-free return policy for customer satisfaction."
    },    {
      title: "Easy Returns",
      desc: "Hassle-free return policy for customer satisfaction."
    },    {
      title: "Easy Returns",
      desc: "Hassle-free return policy for customer satisfaction."
    },
        {
      title: "Easy Returns",
      desc: "Hassle-free return policy for customer satisfaction."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}