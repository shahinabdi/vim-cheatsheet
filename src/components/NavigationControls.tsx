import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (index: number) => void;
}

const NavigationControls = ({ 
  currentPage, 
  totalPages, 
  onPrev, 
  onNext, 
  onGoToPage 
}: NavigationControlsProps) => (
  <div className="flex items-center justify-between mt-8">
    <button
      onClick={onPrev}
      className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
    >
      <ChevronLeft size={20} />
      <span>Previous</span>
    </button>
    
    <div className="flex items-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onGoToPage(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === index 
              ? 'bg-blue-400 scale-125' 
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
        />
      ))}
    </div>
    
    <button
      onClick={onNext}
      className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
    >
      <span>Next</span>
      <ChevronRight size={20} />
    </button>
  </div>
);

export default NavigationControls;