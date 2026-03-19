import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import User from "../../../../../models/User";
import Profile from "../../../../../models/Profile";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { message: "لطفا وارد حساب کاربری خود شوید " },
        { status: 401 },
      );
    }
    const user = User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { message: "حساب کاربری یافت نشد." },
        { status: 404 },
      );
    }

    const profile = await Profile.findOne({ _id: id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { message: "دسترسی شما به این اگهی محدود شده است " },
        { status: 403 },
      );
    }

    await Profile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "اگهی با موفقیت حذف شد" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "مشکلی در سرور پیش امده است ",
      },
      { status: 500 },
    );
  }
}
