import React from "react";
import { FaMessage, FaX } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}
export default function FloatingButton({ onClick, isOpen }: Props) {
  return (
    <div className="">
      <button
        onClick={onClick}
        className=" text-sm fixed bottom-5 right-5 w-12 h-12 ring ring-purple-300 animate-bounce  bg-purple-700 text-white rounded-full flex justify-center items-center hover:bg-purple-600 transition "
        style={{ animationDuration: "3s" }}
      >
        {isOpen ? (
          <MdClose className="text-3xl" />
        ) : (
          <FaMessage className="text-xl" />
        )}
      </button>
    </div>
  );
}
