import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { slug } = useParams();


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  
  // ✅ Get Categories
  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };
 
  // ✅ Get Products
  const fetchProducts = async () => {
    setLoading(true);
    let API = "https://dummyjson.com/products";

    // ✅ correct condition
    if (slug) {
      API = `https://dummyjson.com/products/category/${slug}`;
    }

    try {
      const res = await axios.get(API);
      setProducts(res.data.products);
    } catch (error) {
      // console.log(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };


  // ✅ Fetch products on slug change
  useEffect(() => {
    fetchProducts();
  }, [slug]);


  // ✅ Fetch categories once
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories */}
      <div>
        <ul className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4">
          {categories.map((cat, index) => (
            <Link key={index} to={`/category/${cat.slug}`}>
              <li className="p-2 text-center cursor-pointer hover:bg-amber-200 shadow text-sm">
                {cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
};