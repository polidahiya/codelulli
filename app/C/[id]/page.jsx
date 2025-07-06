import React from "react";
import Redirector from "../../Redirector";
import { notFound } from "next/navigation";
import { getcollection } from "@/app/Mongodb";

export default async function Page({ params }) {
  const { id } = await params;

  const { Linkscollection } = await getcollection();

  const data = await Linkscollection.findOne({
    linknumber: Number(id),
  });

  if (!data) return notFound();

  const { link, body } = data;

  return (
    <div>
      {link && <Redirector link={link} />}
      <div
        dangerouslySetInnerHTML={{ __html: body || "" }}
        className="text p-2 md:p-10"
      />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { Linkscollection } = await getcollection();

  const data = await Linkscollection.findOne({
    linknumber: Number(id),
  });

  if (!data) return {};

  const { seotitle, seodescription, seokeywords } = data;

  return {
    title: seotitle || "Default Title",
    description: seodescription || "Default Description",
    keywords: seokeywords || "",
    // openGraph: {
    //   images: ogImage,
    // },
  };
}
