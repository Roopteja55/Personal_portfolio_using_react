import styles from './education.module.css'


const Education = () => {
  return (
    <>
      <div className={styles.education}>
        <div className={styles.eduTitle}>
          <h1>Education</h1>
        </div>

        <div className={styles.edu_details}>
          <div className={styles.edu_D}>
            <img
              src="https://cdn.universitykart.com//Content/upload/admin/3xcotr51.ya0.png"
              alt=""
            />
            <h2>Marri Laxman Reddy Institute of Technology and Management</h2>
            <p>
              <span>Branch: </span> BTech, CSE - CS
            </p>
            <p>
              <span>CGPA: </span>8.50/10
            </p>
          </div>

          <div className={styles.edu_D}>
            <img
              src="https://content.jdmagicbox.com/comp/nandyal/s7/9999p8514.8514.151118103737.z9s7/catalogue/nagarjuna-junior-college-noone-palle-nandyal-colleges-ce300vb.jpg"
              alt=""
            />
            <h2>Nagarjuna Junior College</h2>
            <p>
              <span>Branch: </span>MPC
            </p>
            <p>
              <span>CGPA: </span> 8.5
            </p>
          </div>

          <div className={styles.edu_D}>
            <img
              src="https://content.jdmagicbox.com/comp/def_content/schools/school-3-schools-10-979b0.jpg"
              alt=""
            />
            <h2>nagarjuna merit high school</h2>
            <p>
              <span>Branch: </span>SSC
            </p>
            <p>
              <span>CGPA: </span>8.5
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education