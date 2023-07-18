import React from "react";

type CheckboxProps = {
  labelTitle: string;
}

const Checkbox = ({labelTitle}: CheckboxProps) => {
  return (
    <div className="flex items-center items-start gap-2 py-1.5">
      <input
        id="checkbox-1"
        aria-describedby="checkbox-1"
        type="checkbox"
        className="bg-transparent border-[#c2c2c2] focus:ring-3 focus:ring-blue-300 h-3.5 w-3.5 rounded"
      />
      <label
        htmlFor="checkbox-1"
        className="text-[14px] leading-[14px] text-[#212121]"
      >
        {labelTitle}
      </label>
    </div>
  );
};

export default Checkbox;
