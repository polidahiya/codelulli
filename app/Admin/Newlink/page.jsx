import React from "react";
import Clientcomp from "./Clientcomp";
import { getcollection } from "@/app/Mongodb";

async function page({ searchParams }) {
  const { edit } = await searchParams;
  const { Linkscollection, ObjectId } = await getcollection();

  const data = edit
    ? await Linkscollection.findOne({
        _id: new ObjectId(edit),
      })
    : null;
    
  if (data) data._id = data._id.toString();

  return (
    <div>
      <Clientcomp edit={data} />
    </div>
  );
}

export default page;
