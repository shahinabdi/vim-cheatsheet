import { useEffect } from 'react';

const useKeyboardNavigation = (
  currentPage: number, 
  prevPage: () => void, 
  nextPage: () => void
): void => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
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