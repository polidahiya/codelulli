import React from "react";
import { getcollection } from "../Mongodb";

async function page() {
  const { Linkscollection } = await getcollection();
  const data = await Linkscollection.find({}).toArray();
  return <div>links here</div>;
}

export default page;
