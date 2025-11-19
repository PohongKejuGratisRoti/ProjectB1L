"use client";
import React, { useState } from "react";
import NavCat from "@/components/NavCat";
import ProductTray from "@/components/ProductTray";
import Image from "next/image";



const Page = () => {
  const products = require("@/data/DaftarProduk.json");
  const [genre, setGenre] = useState("");
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter(
  (p: any) =>
    (genre ? p.genre.toLowerCase() === genre.toLowerCase() : true) &&
    (p.product_name.toLowerCase().includes(query.toLowerCase()) ||
      p.genre.toLowerCase().includes(query.toLowerCase()))
);



  return (
    <div className="bg-white min-h-screen">
      <NavCat />
      <div className="w-full bg-white h-[10vh] flex flex-row-reverse items-center text-black justify-evenly">

        <input type="text" onChange={(e) => setQuery(e.target.value)} className="w-32 border border-black text-black h-8" />
        <div>
          <div className="flex flex-row gap-2">
  {["Consumable", "PerawatanPasien", "Oksigen", "Elektronik"].map((g) => (
    <button
      key={g}
      onClick={() => setGenre(g)}
      className={`px-3 py-2 rounded ${
        genre === g
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-300"
      }`}
    >
      {g}
    </button>
  ))}

</div>
        </div>
        <div>Logo Perusahaan</div>
      </div>

      <div className="w-full min-h-screen bg-gray-50 border border-black flex flex-row text-black p-4">
        <div className=" w-64 bg-gray-200 p-4 flex flex-col items-start rounded-md mb-14 mr-2 h-fit">
          Filter 
        <div className="flex flex-col gap-2 mt-4">
          {["Consumable", "PerawatanPasien", "Oksigen", "Elektronik"].map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={genre === g}
                onChange={() => setGenre(genre === g ? "" : g)}
                className="w-4 h-4"
              />
              <span>{g}</span>
            </label>
          ))}

          <button
            onClick={() => setGenre("")}
            className="mt-2 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Clear
          </button>
        </div>

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
