export default function UserProfile() {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center ">
        <div className="">
          <img
            className="w-50 h-50"
            src="https://cdn.snappfood.ir/pwa/assets/illustrations/login.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between gap-2 flex-col">
          <span>وارد حساب کاربری شوید</span>
          <p>
            برای استفاده راحت‌تر و امکان ثبت سفارش به حساب کاربری خود وارد شوید
            یا حساب کاربری ایجاد کنید.
          </p>
          <div className=" rounded-md  text-center text-white">
            <button className="bg-secondry py-2 px-3 rounded-md">
              ورود به حساب کاربری
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
