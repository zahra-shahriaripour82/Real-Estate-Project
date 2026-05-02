import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import React from "react";
import ProfileDetailsPage from "@/template/profileDetailsPage/ProfileDetailsPage";

type PageProps = {
  params: {
    profileId: string;
  };
};

async function ProfileDetails({ params }: PageProps) {
  await connectDB();
  const { profileId } = params;
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش امده است</h3>;
  return <ProfileDetailsPage data={profile} />;
}

export default ProfileDetails;
