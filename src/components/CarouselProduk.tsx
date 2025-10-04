"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default (desktop)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,          // enable auto scroll
    autoplaySpeed: 3000,     // time between slides (ms)
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 pt-4 overflow-hidden">
      <Slider {...settings}>
        {/* Item 1 */}
        <div>
          <Link href="#">
            <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto md:mx-2">
              <div className="relative w-full h-56">
                <Image
                  src="/image1.jpg"
                  alt="gambarcar"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-blue-950 text-center">
                <p className="font-bold">Judul 1</p>
                <h2>Deskripsi singkat</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div>
          <Link href="#">
            <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto md:mx-2">
              <div className="relative w-auto h-56">
                <Image
                  src="/image2.jpg"
                  alt="gambarcar"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-blue-950 text-center">
                <p className="font-bold">Judul 2</p>
                <h2>Deskripsi singkat</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div>
          <Link href="#">
            <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto md:mx-2">
              <div className="relative w-auto h-56">
                <Image
                  src="/image2.jpg"
                  alt="gambarcar"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-blue-950 text-center">
                <p className="font-bold">Judul 2</p>
                <h2>Deskripsi singkat</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div>
          <Link href="#">
            <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto md:mx-2">
              <div className="relative w-auto h-56">
                <Image
                  src="/image2.jpg"
                  alt="gambarcar"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-blue-950 text-center">
                <p className="font-bold">Judul 2</p>
                <h2>Deskripsi singkat</h2>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
    </div>

    
  );
}
