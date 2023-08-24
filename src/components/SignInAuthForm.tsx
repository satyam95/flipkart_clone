import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const SignInAuthForm = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });

      if (response?.error) {
        console.error("Authentication error:", response.error);
      } else if (response?.ok) {
        console.log("Authentication successful!");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pb-1.5">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
            id="email-address"
            className="border p-2 text-black placeholder:text-black text-sm w-full rounded-sm border-[#E0E0CF] bg-transparent focus:outline-none focus:ring-0"
            placeholder="Email Address"
            autoComplete="false"
          />
        </div>
        <div className="pb-2.5">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            value={userInfo.password}
            onChange={(event) =>
              setUserInfo({ ...userInfo, password: event.target.value })
            }
            id="password"
            className="border p-2 text-black placeholder:text-black text-sm w-full rounded-sm border-[#E0E0CF] bg-transparent focus:outline-none focus:ring-0"
            placeholder="Password"
            autoComplete="false"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="px-10 py-3 text-sm flex justify-center items-center w-full text-white bg-[#fb641b] cursor-pointer"
        />
      </form>
    </>
  );
};

export default SignInAuthForm;
