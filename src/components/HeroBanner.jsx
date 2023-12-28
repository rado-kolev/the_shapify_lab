import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <div className='flex-col'>
      {/* For screens larger than md */}
      <div className='hidden md:flex gap-4 mt-20'>
        <div className='w-3/5'>
          <h1 className='text-4xl lg:text-5xl/tight xl:text-6xl font-heading font-extrabold text-primary'>
            Welcome to <span className='text-btnOrange'>The Lab</span>!
          </h1>

          <h2 className='text-3xl lg:text-4xl xl:text-5xl/snug font-heading font-bold md:my-16 lg:my-20'>
            Sweat, Smile, <br />{' '}
            <span className='text-primary font-extrabold'>Shape</span>, Repeat
          </h2>

          <p className='font-paragraph text-base md:text-xl lg:text-3xl'>
            Check out the most effective exercises
          </p>

          <button
            onClick={() => (window.location.href = '#exercises')}
            className='border-2 border-primary bg-primary py-3 px-4 my-8 rounded-lg cursor-pointer hover:bg-primaryLight font-bold text-btnOrange'
          >
            Explore Exercises
          </button>

          <h3 className='md:text-[180px]/none lg:text-[260px]/none xl:text-[320px]/none text-primary opacity-10 font-semibold'>
            Exercise
          </h3>
        </div>
        <div className='w-2/5 flex-1 z-10'>
          <img src={HeroBannerImage} alt='' className='rounded-bl-[80px]' />
        </div>
      </div>

      {/* For screens smaller than md */}
      <div className='md:hidden'>
        <div className='w-full'>
          <h1 className='text-4xl lg:text-5xl/tight xl:text-6xl text-center font-heading font-extrabold mt-10 mb-8 text-primary'>
            Welcome to
            <br />
            <span className='text-btnOrange'>The Lab</span>!
          </h1>

          <img
            src={HeroBannerImage}
            alt=''
            className='w-full rounded-bl-[50px]'
          />

          <h2 className='text-3xl lg:text-4xl xl:text-5xl/snug font-heading font-bold mt-10'>
            Sweat, Smile, <br />{' '}
            <span className='text-primary font-extrabold'>Shape</span>, Repeat
          </h2>

          <p className='font-paragraph text-base md:text-xl lg:text-3xl my-8'>
            Check out the most effective exercises
          </p>

          <button
            onClick={() => (window.location.href = '#exercises')}
            className='border-2 border-primary bg-primary py-2 px-3 my-4 rounded-lg cursor-pointer hover:bg-primaryLight font-bold text-btnOrange'
          >
            Explore Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
