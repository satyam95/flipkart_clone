import React from "react";

type Props = {};

const Checkbox = (props: Props) => {
  return (
    <div className="flex items-center items-start py-1.5">
      <input
        id="checkbox-1"
        aria-describedby="checkbox-1"
        type="checkbox"
        className="bg-transparent border-[#c2c2c2] focus:ring-3 focus:ring-blue-300 h-3.5 w-3.5 rounded"
      />
      <label
        htmlFor="checkbox-1"
        className="text-[14px] leading-[14px] ml-[11px] text-[#212121]"
      >
        checkbox
      </label>
    </div>
  );
};

export default Checkbox;
