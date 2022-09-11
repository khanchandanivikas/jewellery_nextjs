import styles from "../scss/about/About.module.scss";
import AboutMission from '../components/AboutMission';
import AboutCeo from '../components/AboutCeo';
import Social from '../components/Social';
import AboutCover from '../components/AboutCover';

const About = () => {
  return (
    <div className={styles.about}>
        <AboutMission />
        <AboutCeo />
        <AboutCover />
        <Social />
    </div>
  )
}

export default About