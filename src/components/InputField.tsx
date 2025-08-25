import React, { useState, useEffect } from "react";
import { Eye, EyeClosed } from "lucide-react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (value: string) => void;
}

function InputField({ label, type = "text", ...props }: InputFieldProps) {
  const [focus, setFocus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    props.onValueChange(value);
  }, [value]);

  return (
    <div className="relative flex border-0 border-b-fuchsia-400 border-b-2">
      <input
        type={
          type !== "password" ? type : passwordVisible ? "text" : "password"
        }
        className="outline-none w-full  bg-transparent text-sm text-gray-50 p-2 peer"
        onFocus={() => setFocus(true)}
        onBlur={(e) => setFocus(e.target.value !== "")}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        autoComplete="off"
        {...props}
      />
      <label
        htmlFor={props.id}
        className={`absolute pointer-events-none  ${
          focus ? "-top-4 text-xs text-gray-700" : "top-0 text-gray-200"
        } left-0 flex items-center p-2 transition-all duration-500 ease-in-out peer-focus:-top-4 peer-focus:text-xs`}
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          className="transition-all duration-200 ease-in cursor-pointer"
          onClick={() => setPasswordVisible((e) => !e)}
        >
          {passwordVisible ? <Eye color="#fff" /> : <EyeClosed color="#fff" />}
        </button>
      )}
    </div>
  );
}

export default InputField;
