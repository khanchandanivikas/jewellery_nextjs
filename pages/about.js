import styles from "../scss/about/About.module.scss";
import AboutMission from '../about/components/AboutMission';
import AboutCeo from '../about/components/AboutCeo';
import Social from '../components/Social';
import AboutCover from '../about/components/AboutCover';

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