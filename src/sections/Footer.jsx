// src/components/Footer.jsx

import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              // 👉 All the new UI magic is in this className!
              className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} logo`}
                // 👉 Adjusted the image size to fit nicely inside the circle
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Suyog Shejal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;