"use client"
import React, { useState } from "react";

function Page() {
  const [values, setValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setValues((prev) => [...prev, inputValue]);
      setInputValue(""); // Clear the input after updating the state
    }
  };

  return (
    <div>
      <h1>Add Fruits</h1>
      {JSON.stringify(values)}
      <div>
        <input
          // onKeyDown={handleOnKeyDown}
          type="text"
          onKeyUpCapture={handleOnKeyDown}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <em>Press Enter to add a new tag</em>
    </div>
  );
}

export default Page;
