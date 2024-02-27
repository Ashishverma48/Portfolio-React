import React from "react";

function Wrapper({ children }) {
  return <div className="md:px-10 px-4">{children}</div>;
}

export default Wrapper;
