"use server";
import { getcollection } from "../../Mongodb";
import Verification from "../../Verifytoken";

export default async function Savelink(data) {
  try {
    const { verified } = await Verification();
    if (!verified) return { status: 400, message: "Invalid User" };

    const { Linkscollection, sitedata, ObjectId } = await getcollection();
    const commondata = { timestamp: new Date() };

    if (data._id) {
      const { _id, ...rest } = data;
      await Linkscollection.updateOne(
        { _id: new ObjectId(data._id) },
        { $set: { ...rest, ...commondata } }
      );
      return { status: 200, message: "Link Updated successfully" };
    } else {
      const updatedsitedata = await sitedata.findOneAndUpdate(
        {},
        { $inc: { linknumber: 1 } },
        { returnDocument: "after", upsert: true }
      );

      await Linkscollection.insertOne({
        ...data,
        ...commondata,
        linknumber: updatedsitedata?.linknumber,
      });

      return {
        status: 200,
        linknumber: updatedsitedata?.linknumber,
        message: "Link saved successfully",
      };
    }
  } catch (error) {
    return { status: 500, message: "Something went wrong" };
  }
}
