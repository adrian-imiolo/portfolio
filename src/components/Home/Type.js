import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Developer", "Engineer", "Designer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 20,
      }}
    />
  );
}

export default Type;
