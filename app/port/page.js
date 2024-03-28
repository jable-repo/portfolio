import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          React/NodeJS/NestJS/React Native/C++/MFC/Visual
          C++/C#/MSSQL/MYSQL/Postgresql/HTS/BITCOIN
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/my.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>노기정</div>
            <div className={styles.profile_info_general_year}>
              남 1979년 (만 45세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-7217-8550</div>
            <div class={styles.profile_label}>Email | fusionsoft@naver.com</div>
            <div class={styles.profile_label}>전화번호 | 02-000-0000</div>
            <div class={styles.profile_label}>
              주소 | 서울 광진구 중곡4동 102번지 37호
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>조선대 </div>
            <div className={styles.grid_item}>
              <div>대학교(4년)</div>
              <div>졸업</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>케이바이러스연구소</div>
            <div className={styles.grid_item}>
              <div>퇴사</div>
              <div>총 18년 1개월</div>
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
            <div className={styles.grid_item}>정보처리기사</div>
            <div className={styles.grid_item}>영어-회화가능</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="https://dotnet.microsoft.com/en-us/languages/csharp">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>C#</span>
            </button>
          </Link>

          <Link href="https://dotnet.microsoft.com/en-us/languages/csharp">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>Node.js</span>
            </button>
          </Link>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>React</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>ReactJS</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>MSSQL</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>MySQL</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>VIsualC·C++</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>PostgreSQL</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>React Native</span>
          </button>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>1997. 03 ~ 2004. 02</div>
              <div>졸업</div>
            </div>
            <div>
              <div>
                <div>조선대 </div>
                <div>컴퓨터공</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>3.95 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>1997</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>전남고등학교 </div>
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
