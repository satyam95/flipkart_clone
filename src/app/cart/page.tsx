import Image from "next/image";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <main>
      <div className="container mx-auto">
        <div className="m-10">
          <div className="flex">
            <div className="m-1.5 bg-white rounded w-2/3 h-full shadow-md">
              <div className="pt-3">
                <div className="border-b border-[#f0f0f0] shadow-[0_1px_1px_0_rgba(0,0,0,.2)] p-6">
                  <div className="flex items-center gap-6">
                    <div className="w-1/4">
                      <div className="relative mx-auto h-[200px] w-[200px]">
                        <Image
                          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                          alt="image"
                          fill={true}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-base	text-[#212121]">
                        CADDLE & TOES Famous Car Remote Control 3D Car with LED
                        Lights, Chargeable
                      </div>
                      <div className="text-sm text-[#878787] pt-1">Black</div>
                      <div className="text-sm text-[#878787] pt-1">
                        Seller:TiaraCollectionss
                      </div>
                      <div className="text-lg font-medium text-[#212121] pt-2">
                        ₹500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0_-2px_10px_0_rgba(0,0,0,.1)]">
                <div className="py-4 px-6 flex justify-end">
                  <button className="bg-[#fb641b] px-10 py-4 rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,.2)]">
                    <div className="flex items-center">
                      <div className="font-medium text-base leading-5 text-white uppercase">
                        Place Order
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="m-1.5 bg-white rounded w-1/3 shadow-md h-full">
              <div className="px-6 py-3 border border-[#f0f0f0]">
                <div className="text-base font-medium text-[#878787] uppercase">
                  Price details
                </div>
              </div>
              <div className="px-6 pt-2">
                <div className="pt-3 py-4 flex justify-between items-center">
                  <div className="text-base text-[#212121]">
                    Price (2 items)
                  </div>
                  <div className="text-base text-[#212121]">₹9,004</div>
                </div>
                <div className="pb-4 flex justify-between items-center">
                  <div className="text-base text-[#212121]">Discount</div>
                  <div className="text-base text-[#388e3c]">− ₹2,700</div>
                </div>
                <div className="pb-4 flex justify-between items-center">
                  <div className="text-base text-[#212121]">
                    Delivery Charges
                  </div>
                  <div className="text-base text-[#388e3c]">Free</div>
                </div>
                <div className="py-6 border-t border-[#e0e0e0] flex justify-between items-center">
                  <div className="text-base font-medium text-[#212121]">
                    Total Amount
                  </div>
                  <div className="text-base font-medium text-[#212121]">
                    ₹9,004
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
