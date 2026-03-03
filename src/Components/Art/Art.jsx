import React from "react";
import ArtImg1 from "../../assets/art1.svg";
import ArtImg2 from "../../assets/art2.svg";
import ArtImg3 from "../../assets/art3.svg";
import ArtImg4 from "../../assets/art4.svg";
import ArtImg5 from "../../assets/art5.svg";

const ArtImg = [
  { id: 1, Image: ArtImg1 },
  { id: 2, Image: ArtImg2 },
  { id: 3, Image: ArtImg3 },
  { id: 4, Image: ArtImg4 },
  { id: 5, Image: ArtImg5 },
];

const Art = () => {
  return (
    <section className="bg-[#F6CFCA] pb-[100px] pt-[100px]">
      <div className="container mx-auto max-w-7xl flex flex-col gap-15.5 text-center justify-center items-center">
        <div className="max-w-235.25 flex items-center justify-center text-center">
          <h2 className="text-[88px] text-center">
            Ease the pain of moving from apartment to apartment.
          </h2>
        </div>
        <div className="flex items-center justify-between w-full">
          {ArtImg.map((product) => (
            <div key={product.id}>
              <img src={product.Image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Art;
