"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "../../assets/burger.jpg";
import curryImg from "../../assets/curry.jpg";
import dumplingsImg from "../../assets/dumplings.jpg";
import macncheeseImg from "../../assets/macncheese.jpg";
import pizzaImg from "../../assets/pizza.jpg";
import schnitzelImg from "../../assets/schnitzel.jpg";
import tomatoSaladImg from "../../assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i < images.length - 1 ? i + 1 : 0)),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="
        relative w-full aspect-[4/3] md:aspect-[16/9]
        rounded-2xl overflow-hidden
        [box-shadow:0_0_0.5rem_rgba(0,0,0,0.5)]
      "
    >
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.image}
          alt={img.alt}
          fill                                 // <- make it fill the frame
          sizes="(min-width: 768px) 50vw, 100vw"
          className={[
            "absolute inset-0 object-cover transition-[opacity,transform] duration-700 ease-out",
            i === current
              ? "opacity-100 translate-x-0 rotate-0 scale-100 z-10"
              : "opacity-0 -translate-x-4 -rotate-2 scale-110 z-0 pointer-events-none",
          ].join(" ")}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
