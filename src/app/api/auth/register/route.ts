import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongo/client";

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();

    if (!email || !name || !password) {
      console.error("Email, username, or password not provided");
      return NextResponse.json(
        { message: "Email, username, and password are required" },
        { status: 400 }
      );
    }

    const client: MongoClient = await clientPromise;
    const db = client.db();

    const user = await db.collection("users").findOne({ email });

    if (user) {
      console.error("Email already exists");
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 10);

    await db.collection("users").insertOne({
      role: "user",
      email,
      name,
      password: hashedPassword,
      otp,
      otpExpiration: expirationTime,
      isVerified: false,
    });

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "OTP sent to email" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
