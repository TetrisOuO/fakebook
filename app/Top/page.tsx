import TopLeft from "./Left/page";
import TopMid from "./Mid/page";
import TopRight from "./Right/page";
import { useState } from "react";

export default function Top() {
  const [chooseData, setChooseData] = useState();

  return (
    <div className="flex w-full h-14 bg-gray-800 justify-between">
      <TopLeft />
      <TopMid />
      <TopRight />
    </div>
  );
}
