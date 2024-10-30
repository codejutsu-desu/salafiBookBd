import React from "react";
import {
  Heart,
  ShoppingCart,
  CircleUserRound,
  Search,
  Menu,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const selectOptions = [
    {
      value: "bookshop",
      label: "Bookshop",
      options: [
        { value: "english", label: "English Book" },
        { value: "arabic", label: "Arabic Book" },
        { value: "bangla", label: "Bangla Book" },
      ],
    },
    // {
    //   value: "lifestyle",
    //   label: "Lifestyle",
    //   options: [
    //     { value: "clothing", label: "Clothing" },
    //     { value: "stationary", label: "Stationary" },
    //     { value: "vitamin", label: "Vitamin" },
    //     { value: "supplement", label: "Supplement" },
    //     { value: "food-drinks", label: "Food and Drinks" },
    //     { value: "body-hair-care", label: "Body and Hair Care" },
    //     { value: "perfume-incense", label: "Perfume and Incense" },
    //   ],
    // },
  ];

  return (
    <div className="flex justify-between py-7 px-5 border border-b-gray-700">
      <div className="flex gap-2">
        <div className="w-8 h-8 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs">D</span>
        </div>

        {selectOptions.map((category) => (
          <Select key={category.value}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder={category.label} />
            </SelectTrigger>
            <SelectContent>
              {category.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
      <div className="flex justify-around gap-5 items-center">
        <Heart className="hover:opacity-50 transition-opacity duration-200 cursor-pointer" />
        <ShoppingCart className="hover:opacity-50 transition-opacity duration-200 cursor-pointer" />
        <CircleUserRound className="hover:opacity-50 transition-opacity duration-200 cursor-pointer" />
        <Search className="hover:opacity-50 transition-opacity duration-200 cursor-pointer" />
        <Drawer>
          <DrawerTrigger>
            <Menu className="hover:opacity-50 transition-opacity duration-200" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>This is drawer</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
