import React from "react";
import BottonContent from "./BottonContent/BottonContent";
import TopContent from "./TopContent/TopContent";
import SelectMap from "../Index/SelectMap/SelectMap";

export default function PcIndex() {
  return (
    <div className="container-custom bg-primary-2  w-full  ">
      <div className="mt-8 flex justify-between pr-8 flex-col  h-full">
        <TopContent />
        <BottonContent />
        <SelectMap/>
      </div>
    </div>
  );
}
