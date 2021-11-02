import React, { useState } from "react";
export default function Todo(props) {
  const [thr, setthr] = useState(false);
  return (
    <li
      style={{ textDecoration: thr ? "line-through" : null }}
      onDoubleClick={() => {
        setthr(!thr);
      }}
    >
      {props.item}
    </li>
  );
}
