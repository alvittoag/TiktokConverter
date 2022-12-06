import { AiOutlineDownload } from "react-icons/ai";

const Input = () => {
  return (
    <form>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-4 lg:items-center">
        <input
          placeholder="Tempel tautan tiktok disini"
          type="text"
          className="ring-1 ring-gray-300 py-2 px-3 lg:py-3 rounded-md lg:w-[550px]"
        />
        <button className="bg-blue-600 text-white mt-3 py-2 rounded-md lg:-mt-0 lg: px-5 lg:py-3 flex gap-2 items-center text-center justify-center">
          <AiOutlineDownload size={24} />
          Download
        </button>
      </div>
    </form>
  );
};

export default Input;
