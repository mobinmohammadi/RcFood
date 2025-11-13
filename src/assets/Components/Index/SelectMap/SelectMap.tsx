import React from "react";
import Leafleft from "./Leafleft/Leafleft";
import SearchCity from "./SearchCity/SearchCity";

export default function SelectMap() {
  return (
    <div>
      <div className="flex flex-col pt-5 gap-5 z-20 bg-white fixed top-1/2 left-1/2 h-[70%] w-[50%] rounded-md -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col pr-3 gap-5">
          <svg className="w-6 h-6">
            <use href="#x-mark"></use>
          </svg>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 text-[25px] font-bold">
              انتخاب آدرس
            </span>
            <span className="text-sm text-gray-500">
              برای مشاهده مناسب‌ترین پیشنهادها به شما، ابتدا موقعیتتان را مشخص
              کنید.
            </span>
          </div>
        </div>
        <div className="bg-zinc-200 h-full ">
          <SearchCity />
          <Leafleft />
        </div>
      </div>
      <div className="fixed w-full top-0 h-full backdrop-blur-xs right-0 z-5 bg-black/30"></div>
    </div>
  );
}
