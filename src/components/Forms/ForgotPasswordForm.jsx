"use client";

import { useRouter } from "next/navigation"; // Import useRouter hook
import InputFields from "../common/InputFields";

export default function ForgotPasswordForm() {
  const router = useRouter(); // Initialize the router

  function formSubmitter(event) {
    event.preventDefault(); // Prevent default form submission behavior
    router.push("/auth/resetverification"); // Client-side route change
  }

  return (
    <form onSubmit={formSubmitter} className="flex flex-col gap-2 w-full px-6">
      <InputFields
        label="Enter personal email"
        name="email"
        input="email"
        placeholder="email address"
      />
      <button
        type="submit"
        className="bg-[#226FFE] text-white font-bold rounded-sm py-1 mt-6"
      >
        Submit
      </button>
    </form>
  );
}
