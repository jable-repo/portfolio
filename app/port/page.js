import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
        R&D/ Battery module technology/ Material development
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/강경민.jpg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}> 강경민</div>
            <div className={styles.profile_info_general_year}>
              남 1994년 (만 29세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-3214-6107</div>
            <div class={styles.profile_label}>Email | kgm@asung.co.kr</div>
            <div class={styles.profile_label}>전화번호 | 031-831-1699</div>
            <div class={styles.profile_label}>
              주소 | 경기도 화성시 우정읍 한말길 38-6
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>대학교(4년)</div>
              <div>재학중</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>아성프라텍</div>
            <div className={styles.grid_item}>
              <div>1년 6개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>-</div>
          </div>

          <div>
            <div className={styles.grid_item}>자격증 / 어학</div>
            <div className={styles.grid_item}>지게차운전기능사, 초경량 비행장치 1종 자격</div>
            <div className={styles.grid_item}>TOEIC 930, 영어 회화 가능</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="http://www.asung.co.kr/">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>Asung Platech Co.</span>
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022. 03 ~</div>
              <div>재학중</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차공학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>3.9 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2013</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>분당대진고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}