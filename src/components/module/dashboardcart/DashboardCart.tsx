"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "@/module/card/Card";
import styles from "@/module/dashboardcart/DashboardCart.module.css";
import { ProfileProps } from "@/utils/types/Types";

function DashboardCart(data: ProfileProps) {
  console.log(data, "pro");
  // here we need router but not developed
  const router = useRouter();

  // const editHandler = () => {
  //   router.push(`/dashboard/my-profiles/${data._id}`);
  // };

  // const deleteHandler = async () => {
  //   const res = await fetch(`/api/profile/delete/${data._id}`, {
  //     method: "DELETE",
  //   });
  //   const result = await res.json();
  //   console.log(result);
  //   if (result.error) {
  //     toast.error(result.error);
  //   } else {
  //     toast.success(result.message);
  //     router.refresh();
  //   }
  // };

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش1
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCart;
