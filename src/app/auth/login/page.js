import LoginForm from "@/components/Forms/LoginForm";

function Loginpage() {
  return (
    <div className="w-full h-full bg-[#eeeeee] flex items-center justify-center">
      <div className="w-full h-full md:w-[28%] md:h-fit p-8 bg-white rounded-md flex flex-col gap-8 items-center justify-center drop-shadow-xl">
        <h1 className="w-full text-[#226FFE] font-bold text-3xl text-center">Sign in</h1>

        <LoginForm />
      </div>
    </div>
  );
}

export default Loginpage;
