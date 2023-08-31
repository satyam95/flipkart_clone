import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <main>
      <div className="container mx-auto">
        <div className="m-2 md:m-10">
          <div className="w-full h-[59vh] bg-white rounded flex flex-col justify-center items-center p-4">
            <Image
              src="/assets/checked-success.svg"
              alt="checked"
              height={100}
              width={100}
            />
            <div className="text-2xl pt-6 text-center">Thank you for shopping with Flipkart</div>
            <Link
              className="bg-[#2874f0] text-white shadow-[0_2px_4px_0_rgba(0,0,0,.2)] text-[13px] font-medium leading-4 px-5 py-3 uppercase rounded-sm mt-4"
              href={"/"}
              // onClick={() => dispatch(resetCart())}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Success;
