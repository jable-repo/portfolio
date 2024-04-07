import Image from "next/image";
import styles from "./page.module.css";

export default function List() {
  let 아성프라텍 = ["강경민", "배터리 모듈 개발", "소재 개발"];
  return (
    <div>
      <h4 className="Tilte">아성프라텍</h4>
      <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/Asung Mark.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/강경민.jpg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/Battery Module.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/소재.jpg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
      {아성프라텍.map((item, I) => {
        return(
          <div>
            <h4>{item} [Management]</h4>
            </div>
        );
      })}
    </div>
  );
} 
