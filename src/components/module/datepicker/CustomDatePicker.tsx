import DatePicker, { DateObject } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import { ProfileDataType } from "@/utils/types/Types";
import styles from "./CustomDatePicker.module.css";
import React from "react";


type propsType = {
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
};

function CustomDatePicker({ profileData, setProfileData }: propsType) {

const changeHandler=(e: DateObject | null)=>{
const date = new Date(e);
setProfileData({...profileData,constructionDate:date})
}

  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
      value={profileData.constructionDate }
      onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;
