"use client";
import React, { useState } from "react";
import NavCat from "@/components/NavCat";
import ProductTray from "@/components/ProductTray";
import Image from "next/image";



const Page = () => {
  const products = require("@/data/DaftarProduk.json");
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter(
  (p: any) =>
    p.product_name.toLowerCase().includes(query.toLowerCase()) ||
    p.genre.toLowerCase().includes(query.toLowerCase())
);


  return (
    <div className="bg-white min-h-screen">
      <NavCat />
      <div className="w-full bg-white h-[10vh] flex flex-row-reverse items-center text-black justify-evenly">

        <input type="text" onChange={(e) => setQuery(e.target.value)} className="w-32 border border-black text-black h-8" />
        <ProductTray />
        <div>Logo Perusahaan</div>
      </div>

      <div className="w-full min-h-screen bg-gray-50 border border-black flex flex-row text-black p-4">
        <div className="w-64 bg-gray-200 p-4 flex flex-col items-start rounded-md mb-6">
          Konten di sini
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={`/imagefolder/${item.image_id}.png`}
                  alt={item.product_name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">
                  {item.product_name}
                </h2>
                <p className="text-gray-600 text-sm flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
