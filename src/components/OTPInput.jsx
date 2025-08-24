import { useEffect, useRef, useState } from 'react';

const OTP_DIGIT_COUNT = 6;

export default function OTPInput() {
  const [otpDigitCount, setOtpDigitCount] = useState(
    new Array(OTP_DIGIT_COUNT).fill(''),
  );

  const ref = useRef([]);

  function handleOnChange(value, index) {
    if (isNaN(value)) return;

    const newOtpDigitCount = [...otpDigitCount];
    const trimValue = value.trim();
    newOtpDigitCount[index] = trimValue.slice(-1);
    setOtpDigitCount(newOtpDigitCount);

    trimValue && ref.current[index + 1]?.focus();
  }

  useEffect(() => ref.current[0]?.focus(), []);

  function handlekeyDown(e, index) {
    if (!e.target.value && e.key === 'Backspace') {
      ref.current[index - 1]?.focus();
    }
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
              ref={(input) => (ref.current[index] = input)}
              onKeyDown={(e) => handlekeyDown(e, index)}
              className="mx-1 h-12 w-12 border border-gray-400 text-center text-white focus:border-blue-700 focus:outline-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
