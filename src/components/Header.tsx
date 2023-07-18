"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import { useAppSelector } from "@/app/store/hooks";
import SearchBar from "./SearchBar";

const Header = () => {
  const productLength = useAppSelector((state) => state.cartArray.productNumber);

  return (
    <>
      <div className="bg-[#2874f0] hidden xl:block">
        <div className="container max-w-[1024px] mx-auto py-2">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/assets/flipkart.png"
                  height={45}
                  width={90}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
            <div className="gap-8 w-full flex items-center justify-evenly">
              <div className="w-full">
                <SearchBar />
              </div>
              <div className="gap-4 w-full flex items-center justify-between">
                <div>
                  <button className="px-10 py-1.5 rounded-sm bg-white text-[#2874f0] font-medium text-base leading-5">
                    Login
                  </button>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="font-medium text-base leading-5 text-white">
                      Become a Seller
                    </div>
                    <div className="font-medium text-base leading-5 text-white">
                      More
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/cart">
                    <div className="relative flex items-center">
                      <div className="pr-2">
                        <svg
                          className="V3C5bO"
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="_1bS9ic"
                            d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                            fill="#fff"
                          ></path>
                        </svg>
                        {productLength > 0 ? (<div className="cart-length">{productLength}</div>): ("")}
                      </div>
                      <div className="font-medium text-base leading-5 text-white">
                        Cart
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2874f0] p-1.5 xl:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <svg
                fill="#fff"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/assets/flipkart.png"
                  height={35}
                  width={70}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                className="V3C5bO"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="_1bS9ic"
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div>
              <button className="px-6 py-1.5 rounded-sm bg-transprent text-white font-medium text-base leading-5">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="sticky top-0 pt-1.5">
          <div className="w-full">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full py-2 px-4 text-sm placeholder:text-slate-500"
                  placeholder="Search for products, brands and more"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fillRule="evenodd">
                      <path
                        className="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        className="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ProductCategoryRow />
    </>
  );
};

export default Header;
