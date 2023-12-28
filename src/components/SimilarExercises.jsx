import ExerciseCard from './ExerciseCard';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import PropTypes from 'prop-types';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const renderExerciseCard = () => (
    <>
      {targetMuscleExercises.map((exercise) => (
        <div
          key={exercise.id}
          itemID={exercise.id}
          title={exercise.id}
          className='mx-6'
        >
          <ExerciseCard key={exercise.id} exercise={exercise} />
        </div>
      ))}
      {equipmentExercises.map((exercise) => (
        <div
          key={exercise.id}
          itemID={exercise.id}
          title={exercise.id}
          className='mx-6'
        >
          <ExerciseCard key={exercise.id} exercise={exercise} />
        </div>
      ))}
    </>
  );

  return (
    <div className='lg:my-24'>
      <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 mt-6 md:mt-12 lg:mt-20 font-bold'>
        Similar <span className='text-primary capitalize'>Target Muscle</span>{' '}
        exercises
      </h3>
      <div className='w-full'>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar
            id='targetMuscle'
            renderItem={renderExerciseCard}
          />
        ) : (
          <Loader />
        )}
      </div>
      <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 mt-6 md:mt-12 lg:mt-20 font-bold'>
        Similar <span className='text-primary capitalize'>Equipment</span>{' '}
        exercises
      </h3>
      <div className='w-full'>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar id='equipment' renderItem={renderExerciseCard} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
};

export default SimilarExercises;
