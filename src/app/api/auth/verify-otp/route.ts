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

  const otpRequest = await db.collection("otpRequests").findOne({ email });

  if (!otpRequest) {
    return NextResponse.json(
      { message: "OTP request not found" },
      { status: 400 }
    );
  }

  if (otpRequest.otp !== otp || new Date() > otpRequest.otpExpiration) {
    return NextResponse.json(
      { message: "Invalid or expired OTP" },
      { status: 400 }
    );
  }

  // Move user data from otpRequests to users
  await db.collection("users").insertOne({
    role: "user",
    email: otpRequest.email,
    name: otpRequest.name,
    password: otpRequest.password,
    isVerified: true,
    createdAt: new Date(),
  });

  // Remove the OTP request
  await db.collection("otpRequests").deleteOne({ email });

  return NextResponse.json(
    { message: "User verified and registered successfully" },
    { status: 200 }
  );
}
