"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Searchbar({ label }) {
  const [searchValue, setSearchValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    console.log("I am Searched", searchValue);
  }

  return (
    <div className="scale-75 lg:scale-100 ">
      <label className="font-bold text-lg">{label} :</label>
      <form
        onSubmit={submitHandler}
        className="border-2 border-[#909090] bg-white/60 flex items-center justify-between px-2 py-1 rounded-lg"
      >
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          type="submit"
          className="hover:bg-blue-600/20 bg-gray-400/30 py-[0.1rem] px-[0.2rem] rounded-md"
        >
          <Image src="/search.svg" width={20} height={20} alt="search icon" />
        </button>
      </form>
    </div>
  );
}
