 import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import { Link } from "react-router-dom";

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchCategories() {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchProducts() {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div>
      <HeroSection />

      <div>
        <ul className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4">
          {
            categories.map((cat, index) => (
              <Link key={index} to={`/category/${cat.name}`}>
                <li className="p-2 text-center cursor-pointer hover:bg-amber-200 shadow text-sm">
                  {cat.slug}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
        }
      </div>
    </div>
  );
};