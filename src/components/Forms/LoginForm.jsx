"use client";
import InputFields from "../common/InputFields";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AccountStateHandler from "../Dashboard/AccountStateHandler";
import { isLoggedIn, stateHandler } from "@/app/page";

export default function LoginForm() {
  const router = useRouter(); // Initialize the router

  function formSubmitter(event) {
    event.preventDefault();
    process.env.ISLOGGIN = true;
  }
  return (
    <form onSubmit={formSubmitter} className="flex flex-col gap-4 w-full px-5">
      <InputFields
        label="Email"
        name="email"
        input="email"
        placeholder="Enter your email"
        // required
      />
      <div className="flex flex-col gap-1">
        <InputFields
          label="Password"
          name="password"
          input="password"
          placeholder="Enter your password"
          // required
        />
        <div className="flex justify-end">
          <Link
            className="text-xs font-medium text-[#3FA2F7]"
            href="/auth/forgotpassword"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <Link
        href="/"
        className="bg-[#226FFE] text-white font-bold rounded-sm py-1 mt-6 text-center"
      >
        Sign in
      </Link>
    </form>
  );
}
