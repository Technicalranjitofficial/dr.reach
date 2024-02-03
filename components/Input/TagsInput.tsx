"use client"
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { addSpecialization, removeSpecialization } from "@/Redux/reducers/UserReducers";
import React, { useEffect, useState } from "react";

function TagInput({handleOnSetValues,handleOnDelete}:{handleOnSetValues:(value:string)=>void,handleOnDelete:(index:number)=>void}) {
//   const [values, setValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const values = useAppSelector(state=>state.userReducer.specializatins);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

        if(inputValue.trim()!=="" && !values.includes(inputValue)){

          dispatch(addSpecialization(inputValue));
          setInputValue("");
        }
    }
  };

 

//   const handleOnDelete=(index:number)=>{
//     console.log(index);
//     const newValues = values.filter((v,i)=>i!==index);
//     setValues(newValues);

//   }

  return (
    <div className="">
     
      <div>
       <div className="flex w-full md:flex-row flex-col gap-1 my-2">
      
       {values && values.map((v,i) => {

return <div key={i} className=" flex flex-row gap-2 border border-gray-500 w-auto py-2 px-2 items-center">
    {/* add delete button also */}
    <span className="badge bg-primary" >{v}</span>
    <span className="text-red-400  font-bold text-[17px] cursor-pointer" onClick={()=>dispatch(removeSpecialization(i))}>x</span>
</div>;
})
}
    
       </div>
       <input
          className="input-tags form-control"
          type="text"
          value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          onKeyDownCapture={handleOnKeyDown}
          data-role="tagsinput"
          placeholder="Enter Specialization"
          name="specialist"
          defaultValue="Children Care,Dental Care"
          id="specialist"
        />
      </div>
      <em>Press Enter to add a new tag</em>
    </div>
  );
}

export default TagInput;
