import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import clientPromise from "@/lib/mongo/client";

export async function POST(req: NextRequest) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json(
      { message: "Email and OTP are required" },
      { status: 400 }
    );
  }

  const client: MongoClient = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 400 });
  }

  if (user.otp !== otp || new Date() > user.otpExpiration) {
    return NextResponse.json(
      { message: "Invalid or expired OTP" },
      { status: 400 }
    );
  }

  await db.collection("users").updateOne(
    { email },
    {
      $set: { isVerified: true },
      $unset: { otp: "", otpExpiration: "" },
    }
  );

  return NextResponse.json(
    { message: "User verified successfully" },
    { status: 200 }
  );
}
