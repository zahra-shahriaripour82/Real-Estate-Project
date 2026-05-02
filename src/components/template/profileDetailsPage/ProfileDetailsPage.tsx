import { ProfileProps } from "@/utils/types/Types";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import React from "react";
import styles from "@/template/profileDetailsPage/ProfileDetailsPage.module.css";
import Title from "@/module/title/Title";
import ItemList from "../itemList/ItemList";

function ProfileDetailsPage({ data }: ProfileProps) {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  } = data;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}></div>
    </div>
  );
}

export default ProfileDetailsPage;
