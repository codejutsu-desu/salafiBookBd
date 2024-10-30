import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MyAccount() {
  return (
    <div className="w-full flex gap-5 justify-between px-12 py-16">
      <div className="flex flex-col gap-4 w-1/2 ">
        <div className="text-5xl font-bold">Login</div>
        <div className="border border-black py-16  px-10 flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button variant="myAccount">Login</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/2 ">
        <div className="text-5xl font-bold">Register</div>
        <div className="border border-black py-16  px-10 flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button variant="myAccount">Register</Button>
        </div>
      </div>
    </div>
  );
}
