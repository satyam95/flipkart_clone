"use client";
import SignInAuthForm from "@/components/SignInAuthForm";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <main>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="m-3">
          <div className="max-w-[840px] min-h-[500px] mx-auto bg-white shadow-[0_2px_4px_0_rgba(0,0,0,.08)] rounded-sm flex">
            <div className="w-2/5 bg-[#2874f0] h-inherit shadow-[0_2px_4px_0_rgba(0,0,0,.08)]">
              <div className="px-10 py-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-medium text-white text-2xl">Login</h2>
                  <p className="text-base text-[#dbdbdb] pt-2">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
                <div>
                  <div className="relative mx-auto h-[270px] w-[270px] md:h-[150px] md:w-[140px] xl:h-[200px] xl:w-[200px]">
                    <Image
                      src="/assets/login.png"
                      alt="login-image"
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/5 h-inherit">
              <div className="flex justify-center items-center h-full w-full flex-col p-10">
                <div className="w-full">
                  <SignInAuthForm />
                </div>
                <div className="text-sm py-4 font-medium">Or</div>
                <button
                  onClick={() => signIn("google")}
                  className="px-10 py-1.5 text-sm border border-[#E0E0CF] flex justify-center items-center w-full"
                >
                  <Image
                    src="/assets/google.svg"
                    alt="google icon"
                    width={30}
                    height={30}
                    className="pr-2"
                  />
                  Sign with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
