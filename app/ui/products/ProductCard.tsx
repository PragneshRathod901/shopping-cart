import React from "react";
import { Product } from "@/app/lib/definition";
import Image from "next/image";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <div className="flex w-[168px] md:w-[300px] flex-col">
      <img
        src={data.image}
        alt={data.title + " image"}
        className="h-[277px] md:h-[399px] w-full"
      />
      <div className=" flex flex-col ">
        <div className="font-bold text-lg py-1 truncate ...">{data.title}</div>
        <div className="font-normal text-sm py-1 truncate ...">
          Sign in or Create an account to see pricing
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
