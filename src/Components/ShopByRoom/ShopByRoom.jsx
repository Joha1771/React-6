import React from "react";
import RoomCard from "../HeroImg/HeroImg";
import ShopByRoom1 from "../../assets/ShopByRoom1.png";
import ShopByRoom2 from "../../assets/ShopByRoom2.png";
import ShopByRoom3 from "../../assets/ShopByRoom3.png";
import ShopByRoom4 from "../../assets/ShopByRoom4.png";

export default function ShopByRoom() {
  const rooms = [
    {
      id: 1,
      name: "Living Room",
      image: ShopByRoom1,
    },
    {
      id: 2,
      name: "Bedroom",
      image: ShopByRoom2,
    },
    {
      id: 3,
      name: "Dining Room",
      image: ShopByRoom3,
    },
    {
      id: 4,
      name: "Office",
      image: ShopByRoom4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Shop by Room
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} imageSrc={room.image} roomName={room.name} />
        ))}
      </div>
    </section>
  );
}
