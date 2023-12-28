import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-5 sm:mt-8'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='w-40 sm:w-52 lg:w-72' />
      </Link>
      <div className='flex gap-5 sm:gap-10 text-lg sm:text-xl lg:text-2xl items-center text-primary font-semibold'>
        <Link to='/' className='hover:text-btnOrange'>
          Home
        </Link>
        <HashLink
          to='/#exercises'
          smooth='true'
          className='hover:text-btnOrange hidden sm:block'
        >
          Exercises
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
