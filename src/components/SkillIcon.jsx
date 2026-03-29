import kotlinIcon from '../assets/img/kotlin-svgrepo-com.svg';
import flutterIcon from '../assets/img/flutter-svgrepo-com.svg';
import springIcon from '../assets/img/spring-svgrepo-com.svg';
import mariadbIcon from '../assets/img/mariadb-svgrepo-com.svg';
import awsIcon from '../assets/img/aws-svgrepo-com.svg';

const imageMap = {
  kotlin: kotlinIcon,
  flutter: flutterIcon,
  spring: springIcon,
  mariadb: mariadbIcon,
  aws: awsIcon,
};

function SkillIcon({ name, iconClass, imgKey, aosDelay }) {
  const imageSrc = imgKey ? imageMap[imgKey] : null;

  return (
    <div
      className="skill-icon"
      data-aos="flip-up"
      data-aos-delay={aosDelay}
      tabIndex="0"
      aria-label={name}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={name} className="skill-icon-image" />
      ) : (
        <i className={iconClass} aria-hidden="true"></i>
      )}

      <span>{name}</span>
    </div>
  );
}

export default SkillIcon;