import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import PropTypes from 'prop-types';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className='flex flex-col md:flex-row items-center md:gap-6 lg:gap-12 xl:gap-16'>
      <img
        src={gifUrl}
        alt={name}
        loading='lazy'
        className='lg:w-[420px] lg:h-[420px] 2xl:w-[450px] 2xl:h-[450px]'
      />
      <div className='gap-5 lg:gap-9 my-6'>
        <h2 className='capitalize text-2xl lg:text-4xl font-bold'>{name}</h2>
        <p className='text-base lg:text-xl text-[#4f4c4c]  text-justify my-4'>
          Exercises keep you strong. <span className='capitalize'>{name}</span>{' '}
          is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div key={item.name} className='flex flex-row gap-6 items-center'>
            <div className='w-16 lg:w-20 h-16 lg:h-20 flex items-center justify-center rounded-full bg-[#FFF2DB] my-2'>
              <img src={item.icon} alt={bodyPart} className='w-10 lg:w-12 h-10 lg:h-12' />
            </div>
            <p className='capitalize text-lg lg:text-2xl font-semibold'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    bodyPart: PropTypes.string,
    gifUrl: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
    equipment: PropTypes.string,
  }).isRequired,
};

export default Detail;
