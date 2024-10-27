import React from "react";
import { Separator } from "@/components/ui/separator";

export default function BookCategories() {
  const categories = [
    "Aqidah (Creed)",
    "Eeman & the Heart",
    "Fasting & Hajj",
    "Prayer",
    "Fiqh",
    "Hadith",
    "Quran Translations",
    "Supplications",
    "Children's Books",
    "Manhaj",
    "Seerah",
    "And more!",
  ];

  return (
    <div className="py-16 px-12 flex gap-5">
      <div className="flex flex-col gap-2">
        <div>
          <div className="text-slateBlue font-bold text-5xl">
            Book Categories
          </div>
          <Separator className="my-2 bg-gold" />
        </div>
        <div className="text-2xl text-gray-700">The Most Popular</div>
        <div className="text-lg mt-5 text-gray-500">
          Check out some of our most popular book topics.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative text-center py-6 px-4 rounded-lg font-semibold text-xl text-gray-700 transition-all duration-200 border-l-4 border-transparent hover:border-gold hover:text-opacity-70"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
