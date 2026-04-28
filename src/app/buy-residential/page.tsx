import BuyResidentialPage from "@/template/BuyResidential/BuyResidentialPage";
import React from "react";

async function BuyResidential() {
  // این مورد حالت تمرینی دارد ومیدانیم که در کامپوننت های ssr نباید از api route استفاده کنیم و کار درستی نیست .
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h3>مشکلی پیش امده است </h3>;
  console.log(data, "all residential");
  return <BuyResidentialPage data={data.data} />;
}

export default BuyResidential;
