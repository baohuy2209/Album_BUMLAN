"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
interface AlbumProps {
  typeFile: string;
  pictures: string[];
}
const album = ({ typeFile, pictures }: AlbumProps) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4">
      {pictures.map((picture, index) => (
        <Image
          key={index}
          src={`/${typeFile}/${picture}.${typeFile}`}
          alt="Bum Lan"
          width={300}
          height={600}
          className="w-full h-full flex justify-center items-center"
        />
      ))}
    </div>
  );
};

export default album;
