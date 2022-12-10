import React from "react";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Tutorial from "../components/Tutorial";

const Home = () => {
  return (
    <div>
      <div className="text-center flex flex-col gap-2 mt-7 lg:mt-14 h-max">
        <h1 className="font-bold text-2xl text-slate-700 lg:text-4xl">
          Download Video Tiktok
        </h1>
        <p className="text-slate-700">
          Tiktok Downloader Tanpa Watermark. Gratis Semua perangkat
        </p>
      </div>
      <div className="mt-6 px-3">
        <Input />
      </div>

      <Tutorial />

      <Footer />
    </div>
  );
};

export default Home;
