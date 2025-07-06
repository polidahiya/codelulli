import React from "react";
import Redirector from "../Redirector";

async function page({ searchParams }) {
  const { L } = await searchParams;

  return (
    <div>
      <Redirector link={`https://${L}`} />
    </div>
  );
}

export default page;

