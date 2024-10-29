import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <div className="w-full h-full bg-[#eeeeee] flex items-center justify-center">
      <div className="w-full h-full md:w-[28%] md:h-fit p-8 bg-white rounded-md flex flex-col gap-10 items-center justify-center drop-shadow-xl">
        <h1 className="w-full text-[#226FFE] font-bold text-3xl text-center">
          Forgot Password
        </h1>

        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
