import React from "react";
import styles from "@/module/buyresidentialSidebar/Sider.module.css";
import { HiFilter } from "react-icons/hi";
import Link from "next/link";

const data = [
  { villa: "ویلا" },
  { apartment: "آپارتمان" },
  { office: "دفتر" },
  { store: "مغازه" },
];

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        دسته بندی <HiFilter />
      </p>
      <Link href="/buy-residential">همه</Link>
      {data.map((item, i) => (
        <Link key={i} href={`/buy-residential?category=${Object.keys(item)}`}>
          {Object.values(item)}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
