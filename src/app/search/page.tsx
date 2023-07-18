"use client"

import { useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  return (
    <span className="text-xl">
      Showing results for: <span className="font-semibold">{searchQuery}</span>
    </span>
  );
};

export default Search;
