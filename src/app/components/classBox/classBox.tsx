import styles from "./classBox.module.css";

export default function ClassBox({
  title,
  description,
  classGroup,
  topBackgroundSrc,
  userImageSrc,
  assignments
}: {
  title: string;
  description: string;
  classGroup: string;
  topBackgroundSrc: string;
  userImageSrc: string;
  assignments: {id: string, topLabel: string, bottomLabel: string}[]
}) {
  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div
          className={styles.topBackground}
          style={{ backgroundImage: `url(${topBackgroundSrc})` }}
        ></div>
        <div className={styles.topPartContent}>
          <h2>
            <div className={styles.label}>
              <div className={`${styles.label} ${styles.title}`}>{title}</div>
              <div className={`${styles.label} ${styles.description}`}>{description}</div>
            </div>
            <div className={styles.labelSpacing}></div>
            <button className={styles.button}>
              <svg
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </button>
          </h2>
          <div className={styles.classGroupContainer}>
            <div className={`${styles.label} ${styles.classGroup}`}>{classGroup}</div>
            <div className={`${styles.classGroupSpacing}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.middlePart}>
        <img src={userImageSrc} alt="" className={styles.image} />
        <div>{assignments.map((assignment) => {
            return (
                <div key={assignment.id}>
                    <div className={styles.assignmentTopLabel}>{assignment.topLabel}</div>
                    <div className={styles.assignmentBottomLabel}>{assignment.bottomLabel}</div>
                </div>
            );
        })}</div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.icon}>
          <svg
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path>
            <path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path>
          </svg>
        </div>
        <div className={styles.icon}>
          <svg
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
