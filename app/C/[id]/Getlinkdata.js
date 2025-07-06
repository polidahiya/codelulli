"use server";
import { getcollection } from "../../Mongodb";

export default async function Getlinkdata(linkid) {
  try {
    const { Linkscollection } = await getcollection();
    const data = await Linkscollection.findOne({ linkid });
    data._id = data._id.toString();
    return { status: 200, data: data };
  } catch (error) {
    return { status: 200, message: "Something went wrong" };
  }
}
