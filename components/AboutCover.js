import CoverImg from "../images/about-cover.jpg";

const AboutCover = () => {
  return (
    <div
      style={{
        background: `url(${CoverImg.src})`,
      }}
    ></div>
  );
};

export default AboutCover;
