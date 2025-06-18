import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../Data/videos';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // 初始检查
      checkScroll();
      
      // 窗口大小变化时重新检查
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth / 2;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative mb-4 mt-4">
      {/* 左侧渐变和按钮 */}
      {showLeftArrow && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"></div>
          <button 
            onClick={() => scroll('left')}
            className="h-9 w-9 rounded-full bg-secondary border border-border flex items-center justify-center ml-1 relative z-20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      )}
      
      {/* 右侧渐变和按钮 */}
      {showRightArrow && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"></div>
          <button 
            onClick={() => scroll('right')}
            className="h-9 w-9 rounded-full bg-secondary border border-border flex items-center justify-center mr-1 relative z-20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
      
      {/* 分类滚动容器 */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide whitespace-nowrap py-2 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`inline-block px-3 py-1.5 rounded-lg mx-1 text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80 text-foreground'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
