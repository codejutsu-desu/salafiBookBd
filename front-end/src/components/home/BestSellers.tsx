import React from "react";
import BookCard from "../reusable/BookCard";

const dummyBooks = [
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+1",
    altText: "Book 1",
    title: "Your Umra Essentials",
    price: "40",
  },
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+2",
    altText: "Book 2",
    title: "The Art of War",
    price: "25",
  },
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+3",
    altText: "Book 3",
    title: "1984",
    price: "15",
  },
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+4",
    altText: "Book 4",
    title: "To Kill a Mockingbird",
    price: "30",
  },
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+5",
    altText: "Book 5",
    title: "The Great Gatsby",
    price: "20",
  },
  {
    imageSrc: "https://via.placeholder.com/150x200?text=Book+6",
    altText: "Book 6",
    title: "Moby Dick",
    price: "22",
  },
];

// Custom Separator Component
const CustomSeparator = () => (
  <div className=" h-[2px] bg-gold w-1/2" /> // Adjust height and color as needed
);

export default function BestSellers() {
  return (
    <div className="px-12 py-6 w-full">
      <div className="flex flex-col gap-2">
        <div className="text-slateBlue font-bold text-5xl">New Arrivals</div>
        <CustomSeparator /> {/* Use custom separator here */}
        <div className="text-xl text-gray-700">To The Store</div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-5">
        {dummyBooks.map((book, index) => (
          <BookCard
            key={index}
            imageSrc={book.imageSrc}
            altText={book.altText}
            title={book.title}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}
