import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongo/client";
import { otpEmail } from "@/emails/otpEmail";
import cookie from "cookie";

type RequestBody = {
  email: string;
  name: string;
  password: string;
  theme?: "light" | "dark" | "system";
};

const detectSystemTheme = (req: NextRequest): "light" | "dark" => {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const theme = cookies.theme || "system";
  const systemTheme = cookies.systemTheme || "light"; // default to light if not set

  return theme === "system"
    ? (systemTheme as "light" | "dark")
    : (theme as "light" | "dark");
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
    expirationTime.setMinutes(expirationTime.getMinutes() + 10);

    // Store OTP and user data temporarily
    await db.collection("otpRequests").insertOne({
      email,
      name,
      password: hashedPassword,
      otp,
      otpExpiration: expirationTime,
      createdAt: new Date(),
    });

    // Determine actual theme
    const actualTheme = detectSystemTheme(req);

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const logoUrl = "https://reparin.xyz/icon/fixitnow-icon-dark.png";
    const websiteUrl = "https://reparin.xyz";

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      html: otpEmail(otp, actualTheme, logoUrl, websiteUrl),
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
