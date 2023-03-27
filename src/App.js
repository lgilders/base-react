import React from "react";

import Link from "@components/Link/Link";

require("./App.css");

const App = ({ title }) => {
  return (
    <>
      <div>{title}</div>
      <Link page="#" children="Link Test Impl" />
    </>
  );
};

export default App;
