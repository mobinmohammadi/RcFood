import SearchTopbar from "./SearchTopbar/SearchTopbar";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="hidden sm:flex justify-between pl-6 items-center">
        <svg className="w-24 h-24 sm:w-34 sm:h-34">
          <use xlinkHref="#logo-snap"></use>
        </svg>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex gap-1 items-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#shop"></use>
            </svg>

            <span className="mt-1 text-gray-600 text-sm">
              ثبت نام فروشندگان
            </span>
          </div>
          <div className="py-2 px-3 bg-secondry text-sm text-white rounded-sm">
            <span>ورود یا عضویت</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <div className=""></div>
        <div className="flex font-bold bg-secondary-2 text-secondary-3 py-2 px-3 rounded-2xl items-center justify-center text-sm gap-1" >
          <span>انتخاب آدرس</span>
          <svg className="w-4 h-4">
            <use href="#chevron-down"></use>
          </svg>

        </div>
        <svg className="w-6 h-6">
          <use href="#shope-basket"></use>
        </svg>
      </div>
      <SearchTopbar/>
    </div>
  );
}
