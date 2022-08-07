import styles from "../scss/About.module.scss";
import AboutMission from '../components/AboutMission';
import AboutCeo from '../components/AboutCeo';
import AboutSocial from '../components/AboutSocial';
import AboutCover from '../components/AboutCover';

const About = () => {
  return (
    <div className={styles.about}>
        <AboutMission />
        <AboutCeo />
        <AboutCover />
        <AboutSocial />
    </div>
  )
}

export default About