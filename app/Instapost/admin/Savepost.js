"use server";
import { getcollection } from "../../Mongodb";
import Verification from "../../Verifytoken";

export async function Savepost(data) {
  try {
    const { verified } = await Verification();
    if (!verified) return { status: 400, message: "Invalid User" };

    const { Instapostscollection, ObjectId } = await getcollection();
    const commondata = { timestamp: new Date() };

    if (data._id) {
      const { _id, ...rest } = data;
      await Instapostscollection.updateOne(
        { _id: new ObjectId(data._id) },
        { $set: { ...rest, ...commondata } }
      );
      return { status: 200, message: "Post Updated successfully" };
    } else {
      await Instapostscollection.insertOne({
        ...data,
        ...commondata,
      });

      return {
        status: 200,
        message: "Post saved successfully",
      };
    }
  } catch (error) {
    return { status: 500, message: "Something went wrong" };
  }
}

export async function Deletepost(id) {
  try {
    const { verified } = await Verification();
    if (!verified) return { status: 400, message: "Invalid User" };

    const { Instapostscollection, ObjectId } = await getcollection();
    await Instapostscollection.deleteOne({ _id: new ObjectId(id) });

    return {
      status: 200,
      message: "Post saved successfully",
    };
  } catch (error) {
    return { status: 500, message: "Something went wrong" };
  }
}
