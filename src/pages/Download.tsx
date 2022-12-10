import { AiOutlineDownload } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { getApi } from "../components/getApi";
import Loading from "../components/Loading";
import { AiOutlineNotification } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import { Data } from "../Model";

interface Search {
  data: Data;
  isLoading: boolean;
  isError: boolean;
}

const Download = () => {
  const { state } = useLocation();
  const { search } = state;

  const { data, isLoading, isError }: Search = getApi(
    `https://api.hayo.my.id/api/tiktok/4?url=${search}`
  );

  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div className="mt-7 px-3 flex flex-col gap-3 lg:flex-row lg:justify-between lg:px-16 lg:border-b lg:border-gray-300 lg:pb-10 lg:items-center lg:mt-16">
          <img
            className="w-52 mx-auto lg:mx-0 rounded-lg"
            src={data?.img}
            alt="/"
          />
          <div className="flex flex-col gap-3 lg:gap-4 mt-6 lg:mt-0">
            <a href={data?.link1}>
              <div className="bg-sky-700 py-4 px-3 lg:w-96 text-white rounded-md text-center flex justify-center gap-1">
                <AiOutlineDownload size={24} />
                <h1 className="font-bold">Download</h1>
              </div>
            </a>
            <a href={data?.link2}>
              <div className="bg-green-600 py-2 px-3 text-white rounded-md text-center flex justify-center gap-1">
                <h1 className="font-bold">Download Server 02</h1>
              </div>
            </a>
            <div
              onClick={() => navigate((window.location.href = "/"))}
              className="bg-gray-700 py-2 px-3 text-white rounded-md text-center flex justify-center gap-1 cursor-pointer"
            >
              <h1>Download other video</h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="px-2 mt-4 flex items-center lg:px-12 lg:mt-8 cursor-pointer"
            onClick={() => navigate((window.location.href = "/"))}
          >
            <IoIosArrowBack size={25} />
            <p>Kembali</p>
          </div>
          <div className="flex justify-center mx-auto mt-20 py-5 text-white font-bold bg-red-600 w-72 rounded-lg animate-bounce gap-2">
            <AiOutlineNotification size={25} />
            <h1>URL Tidak Ditemukan</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Download;
