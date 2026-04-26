import { categoryCardData, services } from "@/constants/HomePageConstants";
import CategoryCard from "@/module/categoryCard/categoryCard";

import styles from "@/template/homePage/HomePage.module.css";
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
    </div>
  );
}

export default HomePage;
