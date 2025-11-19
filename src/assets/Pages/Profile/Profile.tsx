import { useState } from "react";

export default function Profile() {
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const handlerLoader = () => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      history.back();
      alert("تغییرات ذخیره شد سید جان 😉");
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className=" flex flex-col gap-7">
        <div className="flex gap-2 items-center fixed bg-white ml-3 w-full h-14 rounded-xs border-t-slate-300 border-t-2 border-b-slate-300 border-b-2">
          <div onClick={() => history.back()} className="cursor-pointer">
            <svg className="w-5 h-5">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </div>
          <span className="text-base">اطلاعات کاربری</span>
        </div>
        <div className="flex container-custom items-center justify-center w-full flex-col gap-3 pt-16">
          <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
            <label htmlFor="" className="text-slate-400 text-md sm:text-base">
              نام
            </label>
            <input
              className="outline-0 text-zinc-900 text-xs sm:text-md"
              type="text"
              placeholder="مبین"
            />
          </div>
          <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
            <label htmlFor="" className="text-slate-400 text-md sm:text-base">
              نام خانوادگی
            </label>
            <input
              className="outline-0 text-zinc-900 text-xs sm:text-md"
              type="text"
              placeholder="محمدی"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
              <label htmlFor="" className="text-slate-400 text-md sm:text-base">
                شماره موبایل
              </label>
              <input
                className="outline-0 text-zinc-900 text-xs sm:text-md"
                type="text"
                placeholder="0912345678"
              />
            </div>
            <span className="text-slate-400 text-x pr-3">
              برای تغییر شماره موبایل با پشتیبانی تماس بگیرید.
            </span>
          </div>
          <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
            <label htmlFor="" className="text-slate-400 text-md sm:text-base">
              ایمیل (اختیاری)
            </label>
            <input
              className="outline-0 text-zinc-900 text-xs sm:text-md"
              type="text"
              placeholder="mobin@gmail.com"
            />
          </div>
          {isLoader ? (
            <div className="bg-gray-800 rounded-md flex w-full items-center justify-center py-2">
              <div className="loader"></div>
            </div>
          ) : (
            <div
              onClick={() => handlerLoader()}
              className="w-full bg-sky-700 text-white flex items-center justify-center text-md py-2 rounded-md"
            >
              <button>ذخیره تغییرات</button>
            </div>
          )}
        </div>
      </div>
      <div className="h-2 bg-line"></div>
      <div className=" gap-3">
        <span className="text-md text-gray-900 px-3 pb-2">
          تنظیمات ورود به حساب
        </span>
        <div className="& > *:hover:bg-slate-100 & > *:py-4 transition-all & > *:cursor-pointer & > *:px-3">
          <div className="flex items-center justify-between ">
            <div className="flex flex-col gap-2  text-md">
              <span>ورود به حساب کاربری فقط با رمز عبور</span>
              <span className="text-slate-500 text-sm">
                ارسال کد‌ یک‌بارمصرف برای شما غیر‌فعال می‌شود.
              </span>
            </div>
            <div className="">
              <div className=" butom-Custom"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-md">بازیابی رمز عبور</span>
            <svg className="w-6 h-6 text-slate-400">
              <use xlinkHref="#chevron-left"></use>
            </svg>
          </div>
            <div className="flex justify-between items-center">
            <span className="text-md">حذف حساب کاربری</span>
            <svg className="w-6 h-6 text-slate-400">
              <use xlinkHref="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
