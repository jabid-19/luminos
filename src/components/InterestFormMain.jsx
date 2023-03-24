import React from "react";
import { useForm } from "react-hook-form";

export const InterestFormMain = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      className="max-w-lg sm:mx-auto mt-20 mx-8 text-[#1a212d]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label htmlFor="companyName" className="block font-bold mb-2">
          Företagsnamn <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          placeholder="Företagsnamn"
          className={`w-full px-3 py-2 border ${
            errors?.companyName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#fab300]`}
          {...register("companyName", {
            required: { value: true, message: "Detta fält är obligatoriskt" },
          })}
        />
        {errors?.companyName && (
          <span className="text-red-500 mt-1 block">
            {errors?.companyName?.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="kontaktperson" className="block font-bold mb-2">
          Namn på kontaktperson <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="kontaktperson"
          placeholder="Namn på kontaktperson"
          className={`w-full px-3 py-2 border ${
            errors?.kontaktperson ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#fab300]`}
          {...register("kontaktperson", {
            required: { value: true, message: "Detta fält är obligatoriskt" },
          })}
        />
        {errors?.kontaktperson?.message && (
          <span className="text-red-500 mt-1 block">
            {errors?.kontaktperson?.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNo" className="block font-bold mb-2">
          Telefonnummer och mejl till kontaktperson{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="phoneNo"
          placeholder="Telefonnummer och mejl till kontaktperson"
          className={`w-full px-3 py-2 border ${
            errors?.phoneNo ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#fab300]`}
          {...register("phoneNo", {
            required: { value: true, message: "Detta fält är obligatoriskt" },
          })}
        />
        {errors?.phoneNo?.message && (
          <span className="text-red-500 mt-1 block">
            {errors?.phoneNo?.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Meddelande <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          placeholder="Meddelande"
          rows="5"
          className={`w-full px-3 py-2 border ${
            errors?.message ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#fab300]`}
          {...register("message", {
            required: { value: true, message: "Detta fält är obligatoriskt" },
          })}
        />
        {errors?.message?.message && (
          <span className="text-red-500 mt-1 block">
            {errors?.message?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#1a212d] text-white px-4 py-2 hover:bg-[#fab300] transition-colors duration-300"
      >
        Skicka in
      </button>
    </form>
  );
};
