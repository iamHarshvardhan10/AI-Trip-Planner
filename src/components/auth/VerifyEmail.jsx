import { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-teal-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Verify Your Email
        </h1>
        <p className="text-gray-500 mb-6">
          Enter the 6-digit OTP sent to your email to continue.
        </p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className=" text-gray-500">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="w-[10px] h-[50px] border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          )}
          containerStyle="flex justify-center gap-2"
        />

        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Verify OTP
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Didn{""}t receive the code?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Resend
          </span>
        </p>

        {/* Back to Register Button */}
        <Button
          className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          onClick={() => navigate("/register")}
        >
          ← Back to Register
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
