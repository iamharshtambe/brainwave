import { useState } from 'react';

const OTP_DIGIT_COUNT = 6;

export default function OTPInput() {
  const [otpDigitCount, setOtpDigitCount] = useState(
    new Array(OTP_DIGIT_COUNT).fill(''),
  );

  function handleOnChange(value, index) {
    if (isNaN(value)) return;

    const newOtpDigitCount = [...otpDigitCount];
    newOtpDigitCount[index] = value.slice(-1);
    setOtpDigitCount(newOtpDigitCount);
  }

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">OTP Input</h1>

        <div>
          {otpDigitCount.map((input, index) => (
            <input
              type="text"
              key={index}
              value={otpDigitCount[index]}
              onChange={(e) => handleOnChange(e.target.value, index)}
              className="mx-1 h-12 w-12 border border-gray-400 text-center text-white focus:border-blue-700 focus:outline-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
