import React from "react";
import footerImg1 from "../../assets/footer1.svg";
import footerImg2 from "../../assets/footer2.svg";
import footerImg3 from "../../assets/footer3.svg";
import footerImg4 from "../../assets/footer4.svg";
import footerImg5 from "../../assets/footer5.svg";
import footerImg6 from "../../assets/footer6.svg";
import FooterLink from "../FooterLink/FooterLink";

const Footer = () => {
  return (
    <footer className="bg-[#FBF8F5] border-t border-[#D4C5B3]">
      <div className="container px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#000000] font-semibold mb-6 text-sm tracking-wider">
              FURNITURE
            </h3>
            <ul className="space-y-3">
              <FooterLink title="Packages" />
              <FooterLink title="Living Room" />
              <FooterLink title="Bedroom" />
              <FooterLink title="Dining" />
              <FooterLink title="Home Office" />
              <FooterLink title="Decor" />
              <FooterLink title="Lighting" />
              <FooterLink title="Outdoor" />
              <FooterLink title="All Furniture" />
              <FooterLink title="Sample Sale" />
            </ul>
          </div>
          <div>
            <h3 className="text-[#000000] font-semibold mb-6 text-sm tracking-wider">
              ABOUT
            </h3>
            <ul className="space-y-3">
              <FooterLink title="How it Works" />
              <FooterLink title="About Feather" />
              <FooterLink title="Feather Furniture" />
              <FooterLink title="Reviews" />
              <FooterLink title="Feather for WeWork" />
              <FooterLink title="Feather for Business" />
              <FooterLink title="Feather for Staging" />
              <FooterLink title="Affiliate Program" />
              <FooterLink title="Careers" />
              <FooterLink title="In Your Area" />
            </ul>
          </div>

          <div>
            <h3 className="text-[#000000] font-semibold mb-6 text-sm tracking-wider">
              HELP
            </h3>
            <ul className="space-y-3">
              <FooterLink title="FAQs" />
              <FooterLink title="Contact us" />
              <FooterLink title="Privacy Policy" />
              <FooterLink title="Terms" />
              <FooterLink title="FloorFound Terms" />
            </ul>
          </div>

          <div>
            <h3 className="text-[#000000] font-semibold mb-6 text-sm tracking-wider">
              FEATHER ON SOCIAL MEDIA
            </h3>
            <div className="flex gap-3 mb-10">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg1} alt="Facebook" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg2} alt="Pinterest" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg3} alt="Twitter" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg4} alt="Instagram" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg5} alt="LinkedIn" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-white transition-colors"
              >
                <img src={footerImg6} alt="Facebook" />
              </a>
            </div>

            <h3 className="text-[#000000] font-semibold mb-4 text-sm tracking-wider">
              JOIN OUR NEWSLETTER
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder=""
                className="w-full border-b-2 border-[#000000] bg-transparent pb-2 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
