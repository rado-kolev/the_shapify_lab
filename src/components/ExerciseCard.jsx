import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className='w-40 h-[360px] sm:w-52 sm:h-[380px] md:w-64 md:h-[440px] lg:w-[268px] lg:h-[460px] xl:w-80 flex flex-col  pb-2 border-t-4 border-primary bg-white hover:scale-110'
      to={`/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <div className='flex flex-col sm:flex-row justify-center md:justify-start mt-2'>
        <button className='mx-2 md:ml-5 my-1 py-1 px-2 sm:px-4 text-white bg-btnRoseLight text-sm rounded-2xl capitalize'>
          {exercise.bodyPart}
        </button>
        <button className='mx-2 my-1 py-1 px-2 sm:px-4 text-white bg-btnOrangeLight text-sm rounded-2xl capitalize'>
          {exercise.target}
        </button>
      </div>
      <p className='mx-2 sm:mx-5 mt-3 pb-3 text-black text-lg sm:text-xl md:text-2xl font-bold capitalize whitespace-normal'>
        {exercise.name.length > 40
          ? `${exercise.name.substring(0, 40)}...`
          : exercise.name}
      </p>
    </Link>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExerciseCard