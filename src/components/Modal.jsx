import React from "react";
import { useGlobalContext } from "../context";

export default function Modal() {
  return (
    <aside className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/60 grid place-items-center transition-all z-50 ">
      <div className="w-[80vw] h-5/6 bg-white max-w-4xl">
        <h1>modal container</h1>
      </div>
    </aside>
  );
}
