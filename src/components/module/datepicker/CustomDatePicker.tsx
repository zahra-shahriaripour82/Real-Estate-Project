import { ProfileDataType } from "@/utils/types/Types";
import styles from "./CustomDatePicker.module.css"
import DatePicker from "react-multi-date-picker"
import React from 'react'


type propsType={
    profileData: ProfileDataType;
      setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
}

function CustomDatePicker({profileData,setProfileData}:propsType) {
  return (
    <div className={styles.container}>
        <p>تاریخ ساخت</p>
        <DatePicker/>
    </div>
  )
}

export default CustomDatePicker
