import React from "react";

type CheckboxProps = {
  labelTitle: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ labelTitle, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center items-start gap-2 py-1.5">
      <input
        id={labelTitle} // Use labelTitle as the id to associate the label with the input
        aria-describedby={labelTitle}
        type="checkbox"
        value={labelTitle} 
        className="bg-transparent border-[#c2c2c2] focus:ring-3 focus:ring-blue-300 h-3.5 w-3.5 rounded"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={labelTitle} // Use labelTitle as the htmlFor to associate the label with the input
        className="text-[14px] leading-[14px] text-[#212121]"
      >
        {labelTitle}
      </label>
    </div>
  );
};

export default Checkbox;