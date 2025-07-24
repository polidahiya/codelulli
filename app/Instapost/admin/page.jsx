import React from "react";
import Clientcomp from "./Clientcomp";
import { getcollection } from "@/app/Mongodb";
import Verification from "@/app/Verifytoken";
import { notFound } from "next/navigation";

async function page({ searchParams }) {
  const { verified } = await Verification();
  if (!verified) return notFound();
  const { edit } = await searchParams;
  const { Instapostscollection, ObjectId } = await getcollection();

  const data = edit
    ? await Instapostscollection.findOne({
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
