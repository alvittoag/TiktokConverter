import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Inputs {
  search: string;
}

const Input = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      console.log(data.search);
      navigate("/download", { state: { search: data.search } });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-4 lg:items-center">
        <input
          placeholder="Tempel tautan tiktok disini"
          type="text"
          required
          {...register("search")}
          className="ring-1 ring-gray-300 py-3 px-3 lg:py-3 rounded-md lg:w-[550px]"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white mt-3 py-3 rounded-md lg:-mt-0 lg: px-5 lg:py-3 flex gap-1 items-center text-center justify-center"
        >
          <AiOutlineDownload
            className="animate-bounce lg:animate-none"
            size={24}
          />
          Download
        </button>
      </div>
    </form>
  );
};

export default Input;
