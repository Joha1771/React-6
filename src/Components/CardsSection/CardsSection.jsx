import React from "react";
import ContentCards from "../ContentCards/ContentCards";
import contentImg1 from "../../assets/Card1.png";
import contentImg2 from "../../assets/Card2.png";
import contentImg3 from "../../assets/Card3.png";
import contentImg4 from "../../assets/Card4.png";

const CardsSection = () => {
  return (
    <section className="pb-[100px] pt-[100px]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-5.5 text-center justify-center items-center">
          <h2 className="text-5xl font-medium">
            “Keeping Furniture in Homes and out of Landfills."
          </h2>
          <div className="max-w-223">
            <p className="text-2xl font-normal text-gray-700">
              This isn’t just another rental company - We’re elevating the
              future of furniture by replacing the commitment of ownership with
              a culture of sharing in a way that’s curated, convenient, and
              sustainable.
            </p>
          </div>
        </div>
        <ContentCards
          BtnTitle="Explore Furniture"
          cardTitle="Enjoy a fully furnished space in less than week"
          cardDesc="Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco."
          divClassName="flex justify-between"
          contentImg={contentImg1}
        />
        <ContentCards
          BtnTitle="Shop Now"
          cardTitle="Garage Sale - 40% & Up"
          cardDesc="Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember. Terms and conditions apply. View here."
          divClassName="flex flex-row-reverse items-center justify-between"
          contentImg={contentImg2}
        />
        <ContentCards
          BtnTitle="Visit Feather For Business"
          cardTitle="Furniture for business, made simple."
          cardDesc="Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service."
          divClassName="flex items-center justify-between"
          contentImg={contentImg3}
        />
        <ContentCards
          BtnTitle="How Feather Works"
          cardTitle="Never assemble furniture again."
          cardDesc="We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver."
          divClassName="flex flex-row-reverse items-center justify-between"
          contentImg={contentImg4}
        />
      </div>
    </section>
  );
};

export default CardsSection;
