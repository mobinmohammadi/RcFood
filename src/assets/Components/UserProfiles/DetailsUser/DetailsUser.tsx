import { Link } from "react-router-dom";

export default function DetailsUser(localeData: any) {
  const userInfoMenu = [
    {
      title: "تراکنش ها و کیف پول",
      subtitle: "لیست همه کیف پول ها",
      svg: "#pay",
    },
    { title: "اسنپ! کلاب", subtitle: "230 امتیاز", svg: "#club" },
    { title: "تخفیف‌ها و جایزه‌ها", subtitle: "", svg: "#offer" },
    { title: "دعوت از دوستان", subtitle: "", svg: "#gift" },
    { title: "نظرات من", subtitle: "", svg: "#comment-me" },
    { title: "فروشگاه های مورد علاقه من", subtitle: "", svg: "#heart" },

  ];
  return (
    <div>
      {localeData ? (
        <div className="flex  flex-col gap-10 ">
          <div className="mx-3 flex flex-col gap-10">

          <div className="flex px-3 items-center fixed h-20 bg-white w-full top-0 right-0 justify-between ">
            <div className="flex flex-col gap-1 ">
              <span className="text-gray-800 text-xl sm:text-2xl">
                مبین محمدی
              </span>
              <span className="text-slate-400 text-xs sm:text-base font-Morabba">
                09123456789
              </span>
            </div>
            <div className="flex items-center gap-1 text-sky-600">
              <Link to="/profile">اطلاعات کاربری</Link>
              <svg className="w-4 h-4">
                <use href="#chevron-left"></use>
              </svg>
            </div>
          </div>
          <div className="bg-[#FFE6EE] mt-20 w-full py-4 rounded-md ">
            <div className="mx-3 flex flex-col gap-5 ">
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5">
                  <use xlinkHref="#svg-pro"></use>
                </svg>
                <span className="text-md">
                  ارسال رایگان و تا 20٪ تخفیف سفارش
                </span>
              </div>
              <div className="bg-[#D1026D] rounded-full py-2 text-center">
                <button className=" text-white">خرید اشتراک پرو</button>
              </div>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col & > *:last:border-b-0 & > *:border-b-slate-200 & > *:border-b items-center w-full ">
              {userInfoMenu.map((item) => (
                <div className="flex items-center w-full cursor-pointer py-4 px-3 hover:bg-slate-200 justify-between gap-3">
                  <div className="flex gap-2 items-center">
                    <svg className="w-8 h-8">
                      <use xlinkHref={item.svg}></use>
                    </svg>
                    <div className="text-md flex flex-col gap-2 ">
                      <span className="text-gray-800">{item.title}</span>
                      {item.subtitle && (
                        <span className="text-slate-400">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-slate-500">
                    <use xlinkHref="#chevron-left"> </use>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-20 flex-col gap-5 justify-center items-center ">
          <div className="">
            <img
              className="w-53 h-53"
              src="https://cdn.snappfood.ir/pwa/assets/illustrations/login.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between gap-5 flex-col">
            <span className="text-gray-900 text-xl">وارد حساب کاربری شوید</span>
            <p className="text-base text-center leading-6 max-w-120 text-slate-500">
              برای استفاده راحت‌تر و امکان ثبت سفارش به حساب کاربری خود وارد
              شوید یا حساب کاربری ایجاد کنید.
            </p>
            <Link
              to="/login/phone"
              className=" rounded-md  text-center text-white"
            >
              <button className="bg-btnLogin py-2.5 px-4 rounded-md">
                ورود به حساب کاربری
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
