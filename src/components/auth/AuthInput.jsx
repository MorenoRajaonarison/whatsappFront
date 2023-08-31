import React from "react";

const AuthInput = ({ name, type, placeholder, register, error }) => {
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor={name} className="text-sm font-bold tracking-wide">
        {placeholder}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full dark:bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none"
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default AuthInput;