import React from "react";
import styles from "@/module/categoryCard/categoryCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { categorycardProps } from "@/utils/types/Types";

function CategoryCard({ title, name }: categorycardProps) {
  return (
    <div className={styles.card}>
      <Link href="/">
        <Image
          src={`/images/${name}.png`}
          alt={title}
          priority={true}
          height={144}
          width={240}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
