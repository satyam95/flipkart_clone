"use client"

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const search = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <div className="w-full max-w-[500px]">
      <form onSubmit={onSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            id="default-search"
            className="block w-full py-2 px-4 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-0"
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
  );
};

export default SearchBar;
