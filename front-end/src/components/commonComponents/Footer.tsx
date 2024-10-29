import React from "react";
import { Button } from "../ui/button";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  // Array of button labels
  const buttonLabels = [
    "Order Tracking",
    "Terms of Service",
    "Wholesale Application Form",
    "Contact Us",
  ];

  return (
    <div className="h-40 flex flex-col gap-2 items-center justify-center border-t border-gray-300">
      <div className="flex gap-3">
        <Facebook />
        <Instagram />
      </div>
      <div className="flex gap-2">
        {buttonLabels.map((label) => (
          <Button variant="link" className="text-lg" key={label}>
            {label}
          </Button>
        ))}
      </div>
      <div className="text-center text-slateBlue text-sm">
        The Salafi Bookstore & Islamic Centre — 1997-2024 | UK Registered
        Charity — No. 1083080
      </div>
    </div>
  );
}
