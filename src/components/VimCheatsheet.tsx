import { useState } from 'react';
import Header from './Header';
import NavigationTab from './NavigationTab';
import PageContent from './PageContent';
import NavigationControls from './NavigationControls';
import GitHubProfile from './GitHubProfile';
import Footer from './Footer';
import { pagesData } from '../data/pagesData';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';

const VimCheatsheet = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pagesData.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pagesData.length) % pagesData.length);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  useKeyboardNavigation(currentPage, prevPage, nextPage);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6" 
      tabIndex={0}
      role="presentation"
    >
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {pagesData.map((page, index) => (
            <NavigationTab 
              key={index}
              page={page}
              index={index}
              currentPage={currentPage}
              onClick={goToPage}
            />
          ))}
        </div>

        <PageContent page={pagesData[currentPage]} />

        <NavigationControls 
          currentPage={currentPage}
          totalPages={pagesData.length}
          onPrev={prevPage}
          onNext={nextPage}
          onGoToPage={goToPage}
        />

        <GitHubProfile />
        <Footer currentPage={currentPage} totalPages={pagesData.length} />
      </div>
    </div>
  );
};

export default VimCheatsheet;