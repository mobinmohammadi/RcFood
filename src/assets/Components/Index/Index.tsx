import CateguryHeader from "../CateguryHeader/CateguryHeader";
import MenuMobile from "../MenuMobile/MenuMobile";
import PcIndex from "../PcIndex/PcIndex";
import RestaurantCategories from "../RestaurantCategories/RestaurantCategories";

export default function Index() {
  return (
    <div className="flex flex-col gap-10">
      <PcIndex />
      <div className="sm:hidden">
        <CateguryHeader />
        <RestaurantCategories />

        <div className="w-full right-0 fixed border-t-slate-200 border-t-2  bottom-0">
          <div className=" px-9 py-2 ">
            <MenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
