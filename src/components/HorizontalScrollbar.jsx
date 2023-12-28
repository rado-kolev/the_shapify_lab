import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const HorizontalScrollbar = ({ id, renderItem }) => {
  const [scrollAmount, setScrollAmount] = useState(500);

  useEffect(() => {
    // Adjust scrollAmount based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollAmount(150); // Set a smaller scroll amount for smaller screens
      } else {
        setScrollAmount(500); // Default scroll amount for larger screens
      }
    };

    // Initial adjustment on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft - scrollAmount;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft + scrollAmount;
  };

  return (
    <div className='relative flex items-center'>
      <MdChevronLeft
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideLeft}
        size={40}
      />
      <div
        id={`slider-${id}`}
        className='w-full h-auto flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide py-6'
      >
        {renderItem()}
      </div>
      <MdChevronRight
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideRight}
        size={40}
      />
    </div>
  );
};

// PropTypes for type checking
HorizontalScrollbar.propTypes = {
  id: PropTypes.string.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default HorizontalScrollbar;
