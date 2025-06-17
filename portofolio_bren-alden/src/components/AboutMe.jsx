import React, { useState } from 'react'; 
import styles from '../styles/AboutMe.module.css';
import profpicAboutMe from '../assets/aboutMeProfpic.jpg'
import makrabphoto from '../assets/LIXZ2027.JPG'
import dhammaclass1 from '../assets/dhammaclass1.jpeg'
import nonacademicaward from '../assets/NonAcademicAwardSMA.PNG'
const experienceData = [
  {
    id: 'exp1',
    imageSrc: makrabphoto,
    imageAlt: 'MakrabKMBD2025',
    title: 'KMBD : Project Manager of Malam Keakraban 2025',
    description: 'Malam Keakraban 2025 was the first event held in the new term of Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD) during the P36 period. The event aimed to foster togetherness and strengthen the bonds of brotherhood among active members and committee officers within KMBD.',
  },
  {
    id: 'exp2',
    imageSrc: dhammaclass1, 
    imageAlt: 'Visual Pengalaman 2',
    title: 'KMBD : Activist (2024) and Staff (2025) of Dhamma and Social Division', 
    description: 'During my time as an activist in Dhamma and Social Division, I have participated in several routine activities such as Dhamma class and Chanting. In addition to participating, I also became a PIC in these routine activities, such as being a worship leader, operator, and dayaka/documentation. I have also become a staff of the equipment in the Social Events named “Bakti Sosial 2”.',
  },
  {
    id: 'exp3',
    imageSrc: nonacademicaward, 
    imageAlt: 'High School : Non Academic Award',
    title: 'High School : Non Academic Award', 
    description: 'Served as class president for three consecutive years, demonstrating strong leadership and organizational skills. Participated in the city-level Mathematics Olympiad, showcasing analytical and problem-solving abilities. Acted as a committee member in the webinar ‘Membangun Prestasi dengan Hobi’, contributing to event planning and coordination.',
  }
];

function AboutMe() {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  const handleNextExperience = () => {
    setCurrentExperienceIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
  };
  const handlePreviousExperience = () => {
    setCurrentExperienceIndex((prevIndex) => (prevIndex - 1 + experienceData.length) % experienceData.length);
  };
  const activeExperience = experienceData.length > 0 ? experienceData[currentExperienceIndex] : null;

  return (
    <main className={styles['about-me-container']}>
      <section id="about-content">
        <div className={styles['name-container']}><h1>Bren Alden</h1></div>
        <div className={styles['profile-image-container']}>
          <img src={profpicAboutMe} alt="Profile Picture" />
        </div>
        
        <p className={styles.subtitle}>
          Computer Science Major | AI Enthusiast | Passionate Web Developer &
          Designer
        </p>

        <h2>About Me</h2>
        <p>
          Hello, my name is Bren Alden, and I am a Computer Science student at Bina Nusantara University. I am a person with a strong passion for learning and am constantly striving for excellence. Throughout my high school and university years, I have been actively involved in social organizations, particularly within the Buddhist community. I sßeleceted as Project Manager of the "Malam Keakraban 2025" Event at KMBD (Keluarga Mahasiswa Buddhis Dhammavaddhana), and I continue to be an active committee member there.
        </p>
        <p>
          Building upon my foundation in Computer Science, I have developed a deep and growing fascination for the fields of Artificial Intelligence and Web Development. I am keen to move beyond theoretical concepts and dive into practical application. My goal is to understand how to build intelligent, data-driven systems through AI, and at the same time, create dynamic and user-friendly websites and applications. I am excited by the potential to eventually merge these two disciplines to create innovative and impactful digital solutions.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Programming Language :</strong> Python, C, Java,
            JavaScript, HTML, CSS
          </li>
          <li>
            <strong>Artificial Intelligence :</strong> Data Analysis, Natural Language Processing, Machine
            Learning & Deep Learning concepts
          </li>
          <li>
            <strong>Design :</strong> Figma & Canva
          </li>
          <li>
            <strong>Soft Skill :</strong> Leadership, Time Managment, Event Organizer
          </li>
        </ul>
        
        <hr className={styles.separator} />

        <h2 className={styles.experienceTitle}>Experience</h2>
        
        {activeExperience ? ( 
          <div className={styles['experience-item']}>
            <div className={styles['experience-image-placeholder']}>
              <img 
                src={activeExperience.imageSrc || '/images/default-placeholder.png'} 
                alt={activeExperience.imageAlt || activeExperience.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4>{activeExperience.title}</h4>
            <p>
              {activeExperience.description}
            </p>
          </div>
        ) : (
          <p>No experiences to show.</p>
        )}
        
        {experienceData.length > 1 && ( // Hanya tampilkan tombol jika ada lebih dari 1 item
            <div className={styles['navigation-arrows']}>
              <button onClick={handlePreviousExperience} aria-label="Previous experience">&larr;</button>
              <button onClick={handleNextExperience} aria-label="Next experience">&rarr;</button>
            </div>
        )}
      </section>
    </main>
  );
}

export default AboutMe;