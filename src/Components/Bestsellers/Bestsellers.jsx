import React from "react";
import products1 from "../../assets/products1.png";
import products2 from "../../assets/products2.png";
import products3 from "../../assets/products3.png";
import products4 from "../../assets/products4.png";
import CardBtn from "../CardsBtn/CardBtn";

const products = [
  {
    id: 1,
    Image: { src: products1 },
    name: "Modern Chair",
    description: "rent for $15 /month or buy for $359",
    price: "$314",
  },
  {
    id: 2,
    Image: { src: products2 },
    name: "Elegant Table",
    description: "rent for $35 /month or buy for $839",
    price: "$739",
  },
  {
    id: 2,
    Image: { src: products3 },
    name: "Elegant Table",
    description: "rent for $18 /month or buy for $429",
    price: "$379",
  },
  {
    id: 2,
    Image: { src: products4 },
    name: "Elegant Table",
    description: "rent for $52 /month or buy for $1249",
    price: "$1099",
  },
];

const Bestsellers = () => {
  return (
    <section className="bg-[#FBF8F5] pb-[100px] pt-[100px]">
      <div className="container mx-auto max-w-7xl flex flex-col gap-15.5 text-center ">
        <h2 className="pb-10 text-5xl">Shop our Bestsellers</h2>
        <div className="">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center gap-4 bg-[#FFFFFF] py-[20px]"
              >
                <img src={product.Image.src} alt={product.name} />
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="max-w-[120px] text-[18px]">
                  {product.description}
                </p>
                <p className="text-2xl ">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <CardBtn title="Shop All Furniture" />
      </div>
    </section>
  );
};

export default Bestsellers;
