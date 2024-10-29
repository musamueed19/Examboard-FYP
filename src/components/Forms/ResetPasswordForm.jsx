'use client'
import { useRouter } from "next/navigation";
import InputFields from "../common/InputFields";

export default function ResetPasswordForm() {
  const router = useRouter(); // Initialize the router

  function formSubmitter(event) {
    event.preventDefault(); // Prevent default form submission behavior
    router.push("/auth/login"); // Client-side route change
  }
  return (
    <form onSubmit={formSubmitter} className="flex flex-col gap-5 w-full px-6">
      <InputFields
        label="New Password"
        name="newPassword"
        input="password"
        placeholder="Enter new password"
      />
      <InputFields
        label="Confirm Password"
        name="confirmPassword"
        input="password"
        placeholder="Confirm new password"
      />
      <button
        type="submit"
        className="bg-[#226FFE] text-white font-bold rounded-sm py-1 mt-6"
      >
        Reset
      </button>
    </form>
  );
}
