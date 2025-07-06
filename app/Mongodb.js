import { MongoClient, ObjectId } from "mongodb";

const dbLink = process.env.mongodb_link;
const client = new MongoClient(dbLink, { serverSelectionTimeoutMS: 10000 });

let db;
let collections;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("Redirector");

    collections = {
      sitedata: db.collection("sitedata"),
      Linkscollection: db.collection("Links"),
    };
  }

  return collections;
}

export async function getcollection() {
  await connectToDatabase();
  return { ...collections, ObjectId };
}
