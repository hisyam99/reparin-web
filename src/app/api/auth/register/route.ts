import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongo/client";
import { otpEmail } from "@/emails/otpEmail";

type RequestBody = {
  email: string;
  name: string;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, password }: RequestBody = await req.json();

    if (!email || !name || !password) {
      console.error("Email, username, or password not provided");
      return NextResponse.json(
        { message: "Email, username, and password are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
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
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);

    // Store OTP and user data temporarily
    await db.collection("otpRequests").insertOne({
      email,
      name,
      password: hashedPassword,
      otp,
      otpExpiration: expirationTime,
      createdAt: new Date(),
    });

    // Send OTP via email using custom SMTP server
    const smtpHost = process.env.SMTP_HOST ?? '';
    const smtpPort = parseInt(process.env.SMTP_PORT ?? '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const smtpUser = process.env.SMTP_USER ?? '';
    const smtpPassword = process.env.SMTP_PASSWORD ?? '';
    const customDomain = process.env.CUSTOM_DOMAIN ?? '';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const logoUrl = "https://reparin.xyz/icon/fixitnow-icon-dark.png";
    const websiteUrl = "https://reparin.xyz";

    const mailOptions = {
      from: `"Reparin" <${customDomain}>`,
      to: email,
      subject: "Your OTP Code",
      html: otpEmail(otp, logoUrl, websiteUrl),
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
