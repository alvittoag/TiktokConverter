import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-2 mt-8 px-3 bg-gradient-to-r from-pink-600 to-pink-600 border-t border-gray-300 lg:mt-12 rounded-t-full bottom-0">
      <h1 className="text-center mt-3 text-white font-bold">
        Made By Alvitto Aprilian Gumay
      </h1>
      <div className="flex py-3 justify-center text-white gap-5">
        <a href="https://www.facebook.com/alvittoag">
          <BsFacebook size={23} />
        </a>

        <a href="https://www.github.com/alvittoag">
          <BsGithub size={23} />
        </a>

        <a href="https://www.instagram.com/alvittoag">
          <BsInstagram size={23} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
