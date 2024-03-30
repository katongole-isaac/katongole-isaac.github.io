import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import config from "../config/default.json";

const schema = z.object({
  username: z.string().min(3, "Name should be at least 3 char(s)"),
  email: z.string().email("Please provide a valid email"),
  message: z.string().min(5, "Too short message "),
});

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    console.log("data: ", data);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const options: RequestInit = {
      body: formData,
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(config.emailURL, options)
      .then()
      .catch()
      .finally(() => setIsLoading(false));

    setTimeout(() => setIsLoading(false), 6000);
  };

  return (
    <div className="bg-white rounded shadow-xl px-5 py-5 max-w-[400px] m-auto ">
      <div className="py-1 mb-3">
        <h1 className="font-medium text-center text-lg text-slate-800">
          Feel free to leave a message
        </h1>
        <p className="text-gray-400 text-sm my-1 text-center">
          You can as well contact me for work. I'm always ready to recieve your
          message. Thanks 🙏
        </p>
      </div>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-slate-700">
              Name
            </label>
            <div className=" relative flex gap-2">
              <div className="absolute flex  h-full items-center justify-center w-8 pl-3 pointer-events-none ">
                <FaUser className="text-gray-300" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="your name"
                className={` flex-1 pl-10 text-slate-700 focus:outline border rounded outline-2 outline-offset-0 px-3 py-1 ${
                  errors?.username?.message
                    ? "border-rose-400 outline-rose-200"
                    : "border-slate-300 outline-blue-200 "
                }`}
                autoComplete="off"
                {...register("username")}
              />
            </div>

            {
              <p className="text-rose-700 text-sm">
                {errors?.username?.message as string}
              </p>
            }
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-slate-700">
              Email
            </label>

            <div className=" relative flex gap-2">
              <div className="absolute flex  h-full items-center justify-center w-8 pl-3 pointer-events-none ">
                <MdEmail className="text-gray-300" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className={` flex-1 pl-10 text-slate-700 focus:outline border rounded outline-2 outline-offset-0 px-3 py-1 ${
                  errors?.email?.message
                    ? "border-rose-400 outline-rose-200"
                    : "border-slate-300 outline-blue-200 "
                }`}
                autoComplete="off"
                {...register("email")}
              />
            </div>

            {
              <p className="text-rose-700 text-sm">
                {errors?.email?.message as string}
              </p>
            }
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Say something"
              className={`border rounded  text-slate-700 resize-none focus:outline outline-2 outline-offset-0 px-3 py-2 ${
                errors?.message?.message
                  ? "border-rose-400 outline-rose-200"
                  : "border-slate-300 outline-blue-200 "
              }`}
              autoComplete="off"
              rows={8}
              {...register("message")}
            ></textarea>
            {
              <p className="text-rose-700 text-sm">
                {errors?.message?.message as string}
              </p>
            }
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`p-2 flex justify-center items-center gap-3 rounded bg-blue-500 text-white font-bold hover:opacity-95 ${
              isLoading
                ? " opacity-70 disabled:cursor-not-allowed hover:disabled:opacity-70 "
                : ""
            } `}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <span>Send</span>
                <IoSend />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

const Spinner = () => (
  <div
    className="w-5 h-5 border-[3px] border-gray-300 border-r-transparent rounded-full animate-spin "
    style={{ animationDuration: "0.3s" }}
  ></div>
);
