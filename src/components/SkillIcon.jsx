// src/components/SkillIcon.jsx

// Importando as imagens das skills que não são ícones
import kotlinIcon from '../assets/img/kotlin-svgrepo-com.svg';
import flutterIcon from '../assets/img/flutter-svgrepo-com.svg';
import springIcon from '../assets/img/spring-svgrepo-com.svg';
import mariadbIcon from '../assets/img/mariadb-svgrepo-com.svg';
import awsIcon from '../assets/img/aws-svgrepo-com.svg';

// Um mapa para facilitar o acesso às imagens importadas
const imageMap = {
  kotlin: kotlinIcon,
  flutter: flutterIcon,
  spring: springIcon,
  mariadb: mariadbIcon,
  aws: awsIcon,
};

function SkillIcon({ name, iconClass, imgKey, aosDelay }) {
  return (
    <div className="skill-icon" data-aos="flip-up" data-aos-delay={aosDelay} tabIndex="0">
      {imgKey ? (
        <img src={imageMap[imgKey]} alt={name} style={{ width: '2.5rem' }} />
      ) : (
        <i className={iconClass}></i>
      )}
      <span>{name}</span>
    </div>
  );
}

export default SkillIcon;
