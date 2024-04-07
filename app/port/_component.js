import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_red}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
               </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023. 02 ~</div>
            <br />
            <div>1년 6개월</div>
          </div>
          <div>
            <div>아성프라텍 </div>
            <br />
            <div>신사업개발팀 기술연구소 사원</div>
          </div>
          <div>
            <div>
              <div>주요직무</div>
                <br />
              <div>
                전기자동차 배터리 모듈 및 소재 개발을 담당하고 있습니다.
                <br />
                <br />
                현재 현대모비스, 현대케피코와 협업을 진행하고 있습니다.. <br />
                <br />
                배터리모듈의 경우, 현재 MQ4 PE 차종 쏘렌토에 들어가는 하이브리드 배터리 모듈 개발중이며,
                소재쪽으로는 배터리 열폭주 발생시 화재 지연을 할 수 있도록 개발중입니다.
                <br />
                <br />
                배터리 열폭주 발생 시 더 큰 사고를 이어지지 않도록 바로 화재를 진화할 수 있는 소재 개발에 몰두하고 있습니다.
                <br />
                <br />
                현재에도 경량화 및 화재 예방에 대한 방법을 모색하고 있습니다.
                <br />
                <br />
                기술 협업 및 화재 지연 관련 추천 소재가 있으시면
                010-3214-6107 강경민 앞으로 연락 부탁드립니다.
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
