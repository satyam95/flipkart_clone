import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

interface AuthMenuBlockPropsType {
  username: string;
}

const AuthMenuBlock = ({ username }: AuthMenuBlockPropsType) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative inline-block p-1.5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/assets/avatar.svg"
          alt="avatar-image"
          height={24}
          width={24}
        />
        <div className="text-white font-medium text-base">{username}</div>
        {isDropdownVisible === true ? (
          <Image
            src="/assets/uparrow.svg"
            alt="avatar-image"
            height={16}
            width={16}
          />
        ) : (
          <Image
            src="/assets/downarrow.svg"
            alt="avatar-image"
            height={16}
            width={16}
          />
        )}
      </div>
      {isDropdownVisible && (
        <div className="right-1/2 translate-x-1/2 shadow-[0_4px_16px_0_rgba(0,0,0,.2)] top-[28px] mt-2 bg-white absolute w-[230px]">
          <div className="left-1/2 -translate-x-2.5 bottom-full border-white after:border-transparent border-2.5 absolute after:border-b-[#fff] after:border-8  after:-translate-x-2 after:-top-[15px] after:left-0 after:content-[''] after:absolute"></div>
          <div className="px-4 py-3 text-sm text-[#212121] flex items-center gap-2 cursor-pointer" onClick={() => signOut()}>
            <Image
              src="/assets/logout.svg"
              alt="logout icon"
              height={16}
              width={16}
            />
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthMenuBlock;
