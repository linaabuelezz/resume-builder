import React, { useState } from "react";
import { useRouter } from "next/router";
import "../src/app/globals.css";

const CodePage = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value)) {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (element.nextSibling && value !== "") {
        element.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    console.log("Entered code:", enteredCode);
    alert(`You entered the code: ${enteredCode}`);
  };

  const handleResendCode = () => {
    alert("A new code has been sent to your email.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Verification Code</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Please enter the 6-digit code sent to your email.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6 space-x-2">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-2xl"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Verify Code
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:underline"
            >
              Resend Code
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
