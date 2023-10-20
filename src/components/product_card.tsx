import React from "react";
import { IProduct } from "@/interfaces/interface";
import { client } from "@/lib/sanityClient"
import Image from 'next/image'
import { urlForImage } from "../../sanity/lib/image";
export const getProducts = async ()=>{
const res = await client.fetch(`*[_type == "product"]{
  price,
    _id,
    title,
    image,
    category->{
      name
    }
}`);
return res;
}

const ProductCard = async () => {

    const data:IProduct[] = await getProducts();

  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
    {
      data.map((item)=>(
        <div>
          <Image
          width={300}
          height={300}
            src={urlForImage(item.image).url()}
            alt={item.title}
            className="max-h-[200px] object-cover object-top"
          />
        <h2>{item.title}</h2>
        <div>${item.price}</div>
        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Add to Cart
          </button>
      </div>
      ))
    }
    </div>
  );
};

export default ProductCard;
