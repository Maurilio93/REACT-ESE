import React from "react";

export function MouseClicker() {
  function handlerButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  function handlerImgClick(event) {
    console.log(event.currentTarget.src);
    event.stopPropagation();
  }

  return (
    <div>
      <button name="two" onClick={handlerButtonClick}>
        <img
          onClick={handlerImgClick}
          width={24}
          height={24}
          src="https://images.unsplash.com/photo-1719230693769-b8b3224d4016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="foto sassi"
        />
      </button>
    </div>
  );
}
