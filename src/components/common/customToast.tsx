import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

export default function CustomToast() {
  return (
    <div className="">
      <div className="max-w-[350px] m-auto border p-4 shadow-md bg-white text-slate-600 font-medium rounded">
        <div className="flex items-center justify-center gap-2">
          <FaCheckCircle className="text-green-500" fontSize="25px" />
          <p className="text-sm">Thank you, We have received your email.</p>
        </div>
      </div>
    </div>
  );
}

export const CustomErrorToast: React.FC<{ message: string }> = ({
  message,
}) => {
  return (
    <div className="">
      <div className="max-w-[350px] m-auto border p-2 pr-3 shadow-md bg-rose-500 text-slate-600 font-medium rounded">
        <div className="flex items-center justify-center gap-2">
          <MdError className="text-rose-100" fontSize="25px" />
          <p className="text-sm text-rose-50">{message}</p>
        </div>
      </div>
    </div>
  );
};
