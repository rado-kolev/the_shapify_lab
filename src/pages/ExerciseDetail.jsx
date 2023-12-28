import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';

const ExerciseDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl =
          'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );

        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
          youtubeOptions
        );

        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );

        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );

        setEquipmentExercises(equipmentExercisesData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className='text-red-600 text-center py-4'>
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }

  if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) {
    return <div>No Data</div>;
  }

  return (
    <div className='mt-12 lg:mt-24'>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
