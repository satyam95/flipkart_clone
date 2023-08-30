"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Link from "next/link";
import {
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../store/slices/cartSlice";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";


interface CartStateType {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  quantity: number;
}

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { status, data: session } = useSession();
  const products = useAppSelector((state) => state.cartArray.cart);
  const productLength = useAppSelector(
    (state) => state.cartArray.productNumber
  );

  useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [products]);

  const dispatch = useAppDispatch();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async (products: CartStateType[]) => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: products, email: session?.user?.email }),
    });

    const checkoutSessions = await response.json();
    console.log("Checkout Sessions:", checkoutSessions);

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSessions.id,
    });
    if (result.error) {
      alert(result?.error?.message);
    }
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="m-2 md:m-10">
          {products.length > 0 ? (
            <div className="flex flex-col lg:flex-row">
              <div className="m-1.5 bg-white rounded w-full lg:w-2/3 h-full shadow-md">
                <div className="pt-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="border-b border-[#f0f0f0] shadow-[0_1px_1px_0_rgba(0,0,0,.2)] p-3 md:p-6"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                        <div className="w-full md:w-1/4">
                          <div className="relative mx-auto h-[270px] w-[270px] md:h-[150px] md:w-[140px] xl:h-[200px] xl:w-[200px]">
                            <Image
                              src={product.thumbnail}
                              alt={product.title}
                              fill={true}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-3/4">
                          <div className="text-base	text-[#212121]">
                            {product.title}
                          </div>
                          <div className="text-sm text-[#878787] pt-1">
                            {product.brand}
                          </div>
                          <div className="text-sm text-[#878787] pt-1">
                            {product.category}
                          </div>
                          <div className="text-lg font-medium text-[#212121] pt-2">
                            ₹{product.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center">
                          <button
                            onClick={() => {
                              dispatch(decrementInCart(product));
                            }}
                            className="font-medium text-black inline-block w-7 h-7 border border-[#c2c2c2] text-base leading-4 rounded-full disabled:border-[#e0e0e0] disabled:text-[#c2c2c2]"
                            disabled={product.quantity === 1}
                          >
                            -
                          </button>
                          <div className="flex items-center justify-center font-medium text-black border border-[#c2c2c2] w-12 h-7 text-base leading-4 mx-2">
                            {product.quantity}
                          </div>
                          <button
                            onClick={() => {
                              dispatch(incrementInCart(product));
                            }}
                            className="font-medium text-black inline-block w-7 h-7 border border-[#c2c2c2] text-base leading-4 rounded-full"
                          >
                            +
                          </button>
                        </div>
                        <div
                          onClick={() => dispatch(removeFromCart(product))}
                          className="font-medium text-black text-base uppercase cursor-pointer"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="m-1.5 bg-white rounded w-full lg:w-1/3 shadow-md h-full">
                <div className="px-6 py-3 border border-[#f0f0f0]">
                  <div className="text-base font-medium text-[#878787] uppercase">
                    Price details
                  </div>
                </div>
                <div className="px-6 pt-2">
                  <div className="pt-3 py-4 flex justify-between items-center">
                    <div className="text-base text-[#212121]">
                      Price ({productLength} items)
                    </div>
                    <div className="text-base text-[#212121]">
                      ₹{totalPrice}
                    </div>
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
                      ₹{totalPrice}
                    </div>
                  </div>
                </div>
                <div className="shadow-[0_-2px_10px_0_rgba(0,0,0,.1)]">
                  <div className="py-4 px-6 flex justify-end">
                    <button
                      className="bg-[#fb641b] px-10 py-4 rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,.2)]"
                      disabled={status === "authenticated" ? false : true}
                      onClick={() => {handleCheckout(products)}}
                    >
                      <div className="flex items-center">
                        <div className="font-medium text-base leading-5 text-white uppercase">
                          Place Order
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full w-full bg-white">
              <div className="p-4 md:p-8">
                <div className="relative mx-auto h-[270px] w-[270px] md:h-[150px] md:w-[140px] xl:h-[200px] xl:w-[200px]">
                  <Image
                    src="/assets/cart-empty-image.png"
                    alt="empty-image"
                    fill={true}
                    className="object-contain"
                  />
                </div>
                <div className="text-lg font-medium text-center">
                  Your cart is empty.
                </div>
                <div className="pt-4 flex justify-center">
                  <Link href="/">
                    <button className="bg-[#fb641b] px-10 py-4 rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,.2)]">
                      <div className="flex items-center">
                        <div className="font-medium text-base leading-5 text-white uppercase">
                          Continue Shopping
                        </div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
