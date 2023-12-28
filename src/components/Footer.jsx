import Logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full flex flex-col justify-center items-center mt-4 bg-[#FFF3F4]'>
      <img src={Logo} alt='logo' className='h-8 lg:h-10 my-6' />
      <h5 className='text-lg lg:text-2xl pb-2'>
        Made with ❤️ by Rado Kolev
      </h5>
      <p className='text-sm lg:text-base mb-6'>
        © {currentYear}
      </p>
    </div>
  );
}

export default Footer;
