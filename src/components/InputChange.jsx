import { useState } from "react";

const InputChange = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div>El mensaje es: {message}</div>
      <input
        className="focus:border-[#1266f1] peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 
                    py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
                    ease-linear focus:placeholder:opacity-0 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none light:text-neutral-200 
                    light:placeholder:text-neutral-200 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
        id="exampleFormControlInput33"
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};

export default InputChange;
