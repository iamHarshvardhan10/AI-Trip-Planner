import { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { REGISTER } from "../../utils/apis";
const VerifyEmail = () => {
  // const dispatch = useDispatch();
  const { signUpData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  // console.log(otp);
  console.log("Sign UP Data", signUpData);
  const handleVerifyAndSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = signUpData;

    try {
      const repsonse = await fetch(REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          otp,
        }),
        credentials: "include",
      });

      const data = await repsonse.json();
      if (data.success == false) {
        toast.error(data.message);
      }
      if (repsonse.ok) {
        toast.success("Account Verify successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Error While Verifying OTP");
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-green-500/10 backdrop-blur-sm rounded-2xl shadow-4xl flex flex-col items-center ">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
          Verify Your Email
        </h1>
        <p className="text-gray-900 font-bold  mb-6">
          Enter the 6-digit OTP sent to your email to continue.
        </p>
        <form onSubmit={handleVerifyAndSignUp}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[48px] lg:w-[60px] border-2 border-black bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />

          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Verify OTP
          </button>
        </form>
        <div className="flex items-center justify-between flex-row-reverse gap-10 mt-4">
          <p className="text-sm text-gray-900 mt-4">
            Didn{""}t receive the code?{" "}
            <span className="text-blue-900 cursor-pointer hover:underline">
              Resend
            </span>
          </p>

          {/* Back to Register Button */}
          <Button
            className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-300 transition"
            onClick={() => navigate("/register")}
          >
            ← Back to Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
