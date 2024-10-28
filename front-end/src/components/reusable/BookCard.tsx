"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BookCardProps } from "@/types/type";
import { Heart } from "lucide-react";

const BookCard: React.FC<BookCardProps> = ({
  imageSrc,
  altText,
  title,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col gap-3 transition-transform duration-300 items-center ${
        isHovered ? "scale-105" : "scale-100"
      }`} // Scale the entire card on hover
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt={altText}
          width={150}
          height={200}
          className={`transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`} // Scale the image on hover
        />

        <div
          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Heart className="text-white cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col  text-center">
        <div className="text-sm">{title}</div>
        <div
          className={`flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "block" : "hidden"
          }`}
        >
          <div className=" text-gold hover:opacity-80 text-lg rounded cursor-pointer">
            Add to Basket
          </div>
        </div>
        <div
          className={`text-gray-400 text-sm ${isHovered ? "hidden	" : "block"}`}
        >
          {isHovered ? null : `$${price}`}{" "}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
