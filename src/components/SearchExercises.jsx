import { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import BodyPart from './BodyPart';
import PropTypes from 'prop-types';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        );

        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Error fetching body parts:', error);
        // Handle error (display a message)
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=9999',
          exerciseOptions
        );

        const searchedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error searching exercises:', error);
        // Handle error (display a message)
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <h2 className='mb-12 font-bold text-3xl lg:text-4xl xl:text-5xl text-center'>
        Awesome Exercises You <br /> Should Know
      </h2>
      <div className='flex items-center sm:w-[450px] lg:w-[600px] mb-16'>
        {/* Search TextField */}
        <input
          value={search}
          placeholder='Search Exercises...'
          type='text'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={handleKeyDown}
          className='h-10 sm:h-14 bg-white px-1 py-1 md:px-4 md:py-2 flex-1 border-slate-300 border-[1px] rounded-l-md hover:border-primary'
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className='py-1 sm:py-3 sm:px-4 border-4 border-primary bg-primary rounded-r-md hover:bg-primaryLight font-semibold text-btnOrange'>
          Search
        </button>
      </div>
      <div className='w-full'>
        <HorizontalScrollbar
          id='bodyParts'
          renderItem={() =>
            bodyParts.map((item) => (
              <div
                key={item.id || item}
                id={item.id || item}
                title={item.id || item}
                className='mx-5'
              >
                  <BodyPart
                    item={item}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                  />
              </div>
            ))
          }
        />
      </div>
    </div>
  );
};

// Prop types validation
SearchExercises.propTypes = {
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default SearchExercises