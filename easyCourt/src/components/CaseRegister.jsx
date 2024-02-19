import React from "react";

export default function CaseRegister() {
  return (
    <div className="flex flex-col text-center newCase p-[.5%]">
      <h1 className="text-[1.5rem] md:text-[2rem]">Register New Case</h1>
      <div className="flex flex-col bg-[var(--color4)] items-center mx-auto mt-[1%] border-2 max-w-[550px] px-[1%] pb-[1%] pt-[1.75%]">
        <div className="flex justify-between w-[100%] mb-[2.5%]">
          <input
            className="bg-[var(--light-color1)] max-w-[50%] p-[2%]"
            type="text"
            placeholder="Case Number"
          />
          <button className="btn1 max-w-[50%]">Register</button>
        </div>
        <div className="flex items-center justify-center w-[100%] mb-[2.5%]">
          <label className="w-fit text-[#aaa] " htmlFor="status">
            Status
          </label>

          <select
            className="bg-[var(--light-color1)] w-max h-[50px] p-[2%]"
            name="status"
            id="status"
          >
            <option value="volvo">Completed</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex items-center justify-center w-[100%] mb-[2.5%]">
          <label className="w-fit text-[#aaa] " htmlFor="date">
            Enter Next Date:
          </label>
          <input
            className="bg-[var(--light-color1)] w-max h-[50px] p-[2%]"
            type="date"
            id="date"
          />
        </div>

        <input
          className="bg-[var(--light-color1)] w-[100%] mb-[2.5%] h-[50px] p-[2%]"
          type="text"
          placeholder="Accused"
        />
        <input
          className="bg-[var(--light-color1)] w-[100%]  mb-[2.5%] h-[50px] p-[2%]"
          type="text"
          placeholder="Complainant"
        />
        <textarea
          placeholder="Mention Case Details ..."
          name="details"
          id=""
          className="bg-[var(--light-color1)] w-[100%] h-[70px] mb-[2.5%] p-[2%]"
        ></textarea>
        <button className="btn1 ">Register</button>
      </div>
    </div>
  );
}
