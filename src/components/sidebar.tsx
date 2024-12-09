

"use client"

import React, { useState } from "react";
import Image from "next/image";

// Dropdown Chevron Component
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Main Product Page Component
export default function ProductPage() {
  // State for different sections
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
   
  

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Nike Classic Shoes",
      category: "Men's Footwear",
      price: 10995,
      imagePath: "/images/shoes1.png"
    },
    {
      id: 2,
      name: "Adidas Running",
      category: "Sports Collection",
      price: 12495,
      imagePath: "/images/shoes2.png"
    },
    {
      id: 3,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes3.png"
    },
    {
      id: 4,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes4.png"
    },
    {
      id: 5,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes5.png"
    },
    {
      id: 6,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes6.png"
    },
    {
      id: 7,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes7.png"
    },
    {
      id: 8,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes8.png"
    },
    {
      id: 9,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes9.png"
    },
    {
      id: 10,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes10.png"
    },
    {
      id: 11,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes11.png"
    },
    {
      id: 12,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes12.png"
    },
    {
      id: 13,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes13.png"
    },
    {
      id: 14,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes14.png"
    },
    {
      id: 15,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes15.png"
    },
    {
      id: 16,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes16.png"
    },
    {
      id: 17,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes17.png"
    },
    {
      id: 18,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes18.png"
    },
    {
      id: 19,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes19.png"
    },
    {
      id: 20,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes20.png"
    },
    {
      id: 21,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes21.png"
    },
    {
      id: 22,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes22.png"
    },
    {
      id: 14,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes14.png"
    },
    {
      id: 5,
      name: "Puma Casual Wear",
      category: "Lifestyle Shoes",
      price: 8995,
      imagePath: "/images/shoes5.png"
    },
  ];

  // Sidebar Sections
  const CategorySection = ({ 
    title, 
    isOpen, 
    toggleOpen, 
    items 
  }: { 
    title: string, 
    isOpen: boolean, 
    toggleOpen: () => void, 
    items: string[] 
  }) => (
    <div className="border-b pb-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="mt-2 space-y-2">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-black" 
              />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Hamburger Menu */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? 'Close' : 'Filters'}
      </button>

      {/* Sidebar for Mobile and Desktop */}
      <div className={`
        fixed md:static top-0 left-0 h-full w-64 
        bg-white shadow-md p-4 space-y-4 z-40 
        transform transition-transform 
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 overflow-y-auto
      `}>
        {/* Category Sections */}
        <CategorySection 
          title="Gender" 
          isOpen={isGenderOpen} 
          toggleOpen={() => setIsGenderOpen(!isGenderOpen)}
          items={["Men", "Women", "Kids", "Unisex"]}
        />

        <CategorySection 
          title="Kids" 
          isOpen={isSportsOpen} 
          toggleOpen={() => setIsSportsOpen(!isSportsOpen)}
          items={["Girls","Boys"]}
        />

       
        {/* Price Range Section */}
        <div className="pb-4">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => {/* Toggle price section if needed */}}
          >
            <h3 className="text-lg font-semibold">Shop By Price</h3>
            <ChevronIcon isOpen={false} />
          </div>
          <div className="mt-2 space-y-2">
            {[
              "Under ₹ 2,500", 
              "₹ 2,501 - ₹ 7,500",
              
            ].map((price) => (
              <div key={price} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-4 w-4 text-black" 
                />
                <span className="text-sm">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="flex-grow p-4 md:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative w-full pt-[100%]">
                <Image 
                  src={product.imagePath} 
                  alt={product.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute top-0 left-0 object-cover"
                  quality={75}
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm md:text-base font-semibold truncate">{product.name}</h3>
                <p className="text-xs md:text-sm text-gray-600">{product.category}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm md:text-base font-bold">₹ {product.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}










































    

      
           
         
        
      