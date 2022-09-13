import styles from "../scss/about/About.module.scss";
import AboutMission from '../components/about/AboutMission';
import AboutCeo from '../components/about/AboutCeo';
import AboutCover from '../components/about/AboutCover';
import Social from '../components/Social';

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