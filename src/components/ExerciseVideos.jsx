import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import PropTypes from 'prop-types';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className='mt-5 lg:mt-28'>
      <h3 className='text-xl lg:text-3xl font-bold mb-8'>
        Watch <span className='text-primary capitalize'>{name}</span> exercise
        videos
      </h3>
      <div className='w-full'>
        <HorizontalScrollbar
          id='exerciseVideos'
          renderItem={() =>
            exerciseVideos?.slice(0, 9)?.map((item, index) => (
              <a
                key={index}
                className='flex flex-col gap-3 mx-5'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
                rel='noreferrer'
                aria-label={`Watch ${name} exercise video`}
              >
                <img
                  className='rounded-lg w-40 sm:w-48 sm:h-24 md:w-60 md:h-32 lg:w-72 lg:h-40 object-cover'
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />

                <p className='w-40 sm:w-48 md:w-60 lg:w-72 text-lg lg:text-2xl font-semibold whitespace-normal'>
                  {item.video.title.length > 40
                    ? `${item.video.title.substring(0, 40)}...`
                    : item.video.title}
                </p>
                <p className='text-sm lg:text-base whitespace-normal opacity-70'>
                  {item.video.channelName}
                </p>
              </a>
            ))
          }
        />
      </div>
    </div>
  );
};

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExerciseVideos;
