import Card from "@/module/card/Card";
import styles from "@/template/BuyResidential/BuyResidentialPage.module.css";
import { ProfileWithoutUserIdProps } from "@/utils/types/Types";
import React from "react";

function BuyResidentialPage({ data }: ProfileWithoutUserIdProps[]) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        {data.length ? null : <p>هیچ اگهی ثبت نشده است</p>}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
