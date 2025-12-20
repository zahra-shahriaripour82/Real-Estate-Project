import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import {icons} from "@/constants/icons"
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/card/Card.module.css"
import { ProfileProps } from "@/utils/types/Types";

function Card({data:{  _id, category, title, location, price }}:ProfileProps) {
  console.log(category,"z")
  return (
    <div className={styles.container}>
      {/* /assecc to obj statically */}
      <div className={styles.icon}>{icons[category as keyof typeof icons]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;