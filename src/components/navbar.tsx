import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const navbar = () => {
  return (
    <div className="flex flex-row justify-center ">
      <Button variant="link" className="w-[300px] h-[32px] mr-3">
        <Link href="/jfif">Photo by Huy</Link>
      </Button>
      <Button variant="link" className="w-[300px] h-[32px] mr-3">
        <Link href="/jpg">Pretty Girl</Link>
      </Button>
      <Button variant="link" className="w-[300px] h-[32px] mr-3">
        <Link href="/png">Beautiful Girl</Link>
      </Button>
    </div>
  );
};

export default navbar;
