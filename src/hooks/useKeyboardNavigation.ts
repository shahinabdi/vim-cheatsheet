import { useEffect } from 'react';

const useKeyboardNavigation = (currentPage, prevPage, nextPage) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevPage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextPage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, prevPage, nextPage]);
};

export default useKeyboardNavigation;