import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="bg-slateBlue flex gap-2 text-white px-20 py-5">
      <div className="flex flex-col w-1/2">
        <div className="font-semibold text-lg">
          New Arrival From Salafiyya Bangladesh
        </div>
        <div className="mt-16">
          <div>
            <div className="text-gold text-[50px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium suscipit cum reprehenderit.
            </div>
            <div className="text-xl mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              tenetur quam deserunt, praesentium aut veritatis! Harum cum,
              ratione quas optio neque officiis ab repudiandae dolor doloribus?
              Ullam facere a quibusdam, rerum provident amet illum suscipit
              doloribus atque adipisci beatae unde! Quaerat nam autem similique
              corporis numquam quo laborum eos totam?
            </div>
          </div>
          <Button variant="gold" className="mt-3 text-xl border-2">
            Order Now
          </Button>
        </div>
      </div>
      <div className="w-1/2">Image</div>
    </div>
  );
}
