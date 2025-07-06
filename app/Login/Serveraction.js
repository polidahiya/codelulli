"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export default async function Login(password1, password2) {
  try {
    if (
      password1 == process.env.Password1 &&
      password2 == process.env.Password2
    ) {
      const oneMonth = 30 * 24 * 60 * 60;
      const token = jwt.sign({ usertype: "admin" }, process.env.jwt_secret, {
        expiresIn: oneMonth,
      });

      const cookieStore = await cookies();
      cookieStore.set("token", token, {
        maxAge: oneMonth,
        httpOnly: true,
        secure: true,
      });
      return { status: 200, message: "Login successful" };
    }
    return { status: 400, message: "Invalid credentials" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
}
