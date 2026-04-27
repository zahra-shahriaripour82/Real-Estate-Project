import {
  categoryCardData,
  cities,
  services,
} from "@/constants/HomePageConstants";
import CategoryCard from "@/module/categoryCard/CategoryCard";

import styles from "@/template/homePage/HomePage.module.css";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <FiCircle />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {categoryCardData.map((category, i) => (
          <CategoryCard key={i} name={category.name} title={category.title} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <FaCity />
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
