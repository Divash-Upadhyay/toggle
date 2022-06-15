import React, { useState } from "react";

export const Form = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div
          style={{ border: "1px solid black", width: "400px", margin: "auto" }}
        >
          <div>
            <h3>Annette Murphy</h3>
            <h4>sara.cruz@example.com</h4>
          </div>
          <div>
            <h3>Annette Murphy</h3>
            <h4>sara.cruz@example.com</h4>
          </div>
          <div>
            <h3>Annette Murphy</h3>
            <h4>sara.cruz@example.com</h4>
          </div>
          <div>
            <h3>Annette Murphy</h3>
            <h4>sara.cruz@example.com</h4>
          </div>
        </div>
      )}
    </div>
  );
};
