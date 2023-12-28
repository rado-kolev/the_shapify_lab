import Icon from '../assets/icons/gym.png';
import PropTypes from 'prop-types';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      className={`w-36 h-36 sm:w-64 sm:h-64 flex flex-col items-center justify-center bg-white hover:scale-110 cursor-pointer gap-8 border-t-4 ${
        bodyPart === item ? 'border-primary' : 'border-transparent'
      }`}
      onClick={() => {
        setBodyPart(item);
        window.location.href = '#exercises';
      }}
    >
      <img src={Icon} alt={item} className='w-24 h-12 sm:w-36 sm:h-20' />
      <p className='capitalize font-bold text-lg md:text-2xl'>{item}</p>
    </div>
  );
};

BodyPart.propTypes = {
  item: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};


export default BodyPart;
