"use client";

import { ProfileDataType } from "@/utils/types/Types";
import styles from "@/template/addProfile/AddProfilePage.module.css";
import { useState } from "react";
import TextInput from "@/module/TextInput";

export default function AddProfilePage() {
  const [profileData, setProfileData] = useState<ProfileDataType>({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler=()=>{}
  return (
    <div className={styles.container}>
      <h3>ثبت اگهی </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
         <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {/* <RadioList profileData={profileData} setProfileData={setProfileData} /> */}
      {/* <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      /> */}
      <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
    </div>
  );
}

// export default AddProfilePage
