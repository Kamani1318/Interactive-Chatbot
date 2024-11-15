import React, { useState } from 'react';

const Practice = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    setFirstName("")
    setLastName("")
  };

  return (
    <div className="flex items-center justify-center min-h-[300px] bg-gray-800">
      <form className="w-full max-w-md bg-black text-white p-4 rounded-lg shadow-lg">
        <h2>First Name</h2>
        <input
          value={firstname}
          onChange={(e) => {setFirstName(e.target.value)}}
          type="text"
          placeholder="First Name"
          className="
            w-full p-3 text-black rounded-lg shadow-md outline-none 
            focus:ring-2 focus:ring-blue-500 mb-4
          "
        />
        <h2>Last Name</h2>
        <input
          value={lastname}
          onChange={(e) => {setLastName(e.target.value)}}
          type="text"
          placeholder="Last Name"
          className="
            w-full p-3 text-black rounded-lg shadow-md outline-none 
            focus:ring-2 focus:ring-blue-500 mb-4
          "
        />
        <button
          className="
            w-full p-3 text-white bg-blue-500 rounded-lg shadow-md
            hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300
            transition duration-300 ease-in-out
          "
          onClick={handleSubmit}
          disabled={!firstname || !lastname}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Practice;
