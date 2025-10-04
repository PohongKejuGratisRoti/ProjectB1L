import Image from "next/image";
import TombolTentangKami from "@/components/TombolTentangKami";
import CarouselProduk from "@/components/CarouselProduk";
import MenujuKatalog from "@/components/MenujuKatalog";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <div className="flex items-start  w-screen h-screen bg-gradient-to-b from-blue-800 to-red-700 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-8 pointer-events-none"
            style={{ backgroundImage: "url('/gambarkantor.jpg')" }}
          ></div>
          <div className="z-10 font-medium max-w-3xl text-7xl text-center md:text-left mx-auto md:mx-0 md:ml-14 pt-24">
            Melayani dengan Integritas, Menyediakan dengan Kualitas
          </div>
        </div>
        <div className="w-screen h-auto rounded-b-[100vw] bg-red-700 flex flex-col justify-center items-center py-20 px-6">
          <div className="max-w-5xl mb-14 text-3xl text-center font-medium">
            PT. SURYA MISFALAH ABADI adalah penyedia solusi bisnis terpercaya di berbagai bidang dari alat medis, otomotif, plumbing, hingga elektronik. Dengan pengalaman, kami menghadirkan produk berkualitas dan layanan yang dapat diandalkan.
          </div>
          <TombolTentangKami />
        </div>
        <div className="flex flex-col justify-items-start items-center-safe w-screen h-auto bg-gradient-to-b from-black via-black to-red-700">
          
          <div className="mt-8 text-white flex h-1/5 flex-col items-center pb-7">
            <div className="text-5xl px-3 mt-7 my-0 py-0 font-extrabold ml-3">Visi</div>
            <div className="text-2xl mt-1.5 px-5" >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</div>
            <div className="text-5xl px-3 mt-7 my-0 py-0 font-extrabold ml-3">Misi</div>
            <ul className="list-disc pl-10 text-2xl mt-1.5 space-y-2 pr-12">
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</li>
          </ul>
          </div>
        </div>
        <div className="flex auto h-auto bg-gradient-to-b from-red-700 to-blue-700 justify-center py-10">
          <div className="max-w-screen h-auto rounded-xl shadow-gray-800 bg-white w-7xl text-black flex flex-col items-center shadow-lg">
            <div className="mt-7 text-5xl font-semibold" >Produk Kami</div>
            <CarouselProduk />
            <MenujuKatalog />
          </div>
        </div>
      </div>
    </main>
  );
}
