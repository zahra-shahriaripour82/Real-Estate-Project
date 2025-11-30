"use client";

import CustomDatePicker from "@/module/datepicker/CustomDatePicker";
import styles from "@/template/addProfile/AddProfilePage.module.css";
import { ProfileDataType } from "@/utils/types/Types";
import TextInput from "@/module/textInput/TextInput";
import RadioList from "@/module/radiolist/RadioList";
import TextList from "@/module/textlist/TextList";
import Loader from "@/module/loader/Loader";

import { useState } from "react";
import toast from "react-hot-toast";


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
const [loading,setLoading]=useState(false)
  const submitHandler=async ()=>{
    setLoading(true)
const res =await fetch("/api/profile",{
  method:"Post",
  body:JSON.stringify(profileData),
 headers: { "Content-Type": "application/json" },
})
const data= await res.json()
setLoading(false)
if(data.error) {
 toast.error(data.error)
}else {
  toast.success(data.message)
}
  }
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
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
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
      />
      <CustomDatePicker profileData={profileData} setProfileData={setProfileData}/>
      {loading? <Loader/> : (<button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>)}
    </div>
  );
}

// export default AddProfilePage
