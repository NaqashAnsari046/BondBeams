import React, { useState } from "react";

export default function Data() {
  const [CurDate, setDate] = useState("NA");
  const monthNemo = (mydate) => {
    mydate = mydate.replace("-", ",");
    mydate = new Date(mydate);
    return mydate.toLocaleString("en-us", {
      year: "numeric",
      day: "numeric",
      month: "short",
    });
  };
  function clickEv() {
    document.getElementById("th").textContent = monthNemo(CurDate);
  }
  return (
    <>
      <p id="th">Some Value</p>
      <input
        type="text"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <button onClick={clickEv}>Click</button>
    </>
  );
}
