import { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import PropTypes from 'prop-types';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate the range of exercises to display on the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetch exercises data based on the selected body part
  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);
        let exercisesData = [];

        // Fetch data based on the selected body part
        if (bodyPart === 'all') {
          exercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises?limit=10000',
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000`,
            exerciseOptions
          );
        }

        // Set the fetched exercises  and total pages to the state
        setExercises(exercisesData);
        setTotalPages(Math.ceil(exercisesData.length / exercisesPerPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Invoke the fetch function when the bodyPart or setExercises changes
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // If loading, display a loader
  if (loading) {
    return <Loader />;
  }

  // If there's an error, display an error message
  if (error) {
    return (
      <div className='text-red-600 text-center py-4'>
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }

  // Render the component's content if no loading or error
  return (
    <div id='exercises' className='mt-12 p-5 lg:mt-24'>
      <h3 className='text-2xl md:text-3xl mb-12 font-bold text-center sm:text-left'>Showing Results</h3>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='flex gap-8 lg:gap-10 flex-wrap justify-evenly'>
            {currentExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
          <div className='mt-24 flex items-center justify-center'>
            {exercises.length > 9 && (
              <Pagination
                defaultCurrent={1}
                current={currentPage}
                total={totalPages}
                pageSize={exercisesPerPage}
                onChange={paginate}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Prop types for type checking
Exercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default Exercises;
