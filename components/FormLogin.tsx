"use client";

import React, { useState } from "react";

function Form() {
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIspending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCredentials = { surname, password };
    setIspending(true);

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    }).then(() => {
      setIspending(false);
    });
  };
  return (
    <div>
      <form
        className=" flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="rounded-full border-2 border-[#1DD300] bg-black px-4 py-2 w-[450px]"
          placeholder=" Surname"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          type="password"
          className="mt-5 px-4 py-2 rounded-full border-2 border-[#1DD300] w-[450px] mt bg-black"
          placeholder=" Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-[#1DD300] rounded-full w-44 h-[50px] font-medium text-[22px] text-black mt-12">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Form;
