import Profile from "../../../models/Profile";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "../../../models/User";
import { Types } from "mongoose";

// Get all advertisments
export async function GET() {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");
    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { messge: " مشکلی در سرور  رخ داده است " },
      { status: 500 },
    );
  }
}

// Create advertisement
export async function POST(req) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 },
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 },
      );
    }

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 },
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}

// Edit advertisement
export async function PATCH(req) {
  try {
    await connectDB();

    const {
      ـid,
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { message: "لطفا وارد حساب کاربری خود شوید " },
        { status: 401 },
      );
    }
    // this step is  for better security and find user form DB.

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.return(
        { message: "حساب کاربری یافت نشد " },
        { status: 404 },
      );
    }

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 },
      );
    }

    const profile = await Profile.findOne({ _id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { message: "دسترسی شما به این اگهی محدود شده است " },
        { status: 403 },
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.amenities = amenities;
    profile.category = category;
    profile.save();

    return NextResponse.json(
      { message: "اگهی با موفقیت ویرایش شد " },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است " },
      { status: 500 },
    );
  }
}
