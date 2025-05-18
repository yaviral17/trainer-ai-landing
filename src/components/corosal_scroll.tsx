import React from "react";

export function useCarousel(
    totalItems: number,
    visibleItems: number,
    initialIndex: number = 0
  ) {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  
    const next = React.useCallback(() => {
      if (currentIndex < totalItems - visibleItems) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, [currentIndex, totalItems, visibleItems]);
  
    const prev = React.useCallback(() => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }, [currentIndex]);
  
    const goToIndex = React.useCallback((index: number) => {
      if (index >= 0 && index <= totalItems - visibleItems) {
        setCurrentIndex(index);
      }
    }, [totalItems, visibleItems]);
  
    const canGoNext = currentIndex < totalItems - visibleItems;
    const canGoPrev = currentIndex > 0;
  
    return {
      currentIndex,
      next,
      prev,
      goToIndex,
      canGoNext,
      canGoPrev,
    };
  }
  
  // Apply CSS styles to hide scrollbars while maintaining scroll functionality
  export const hideScrollbarCSS = {
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  };
  
  // Define a type for screenshot data
  export interface Screenshot {
    id: number;
    src: string;
    alt: string;
  }
  
  // Define a type for feature data
  export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  // Define animation variants for framer-motion
  export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  export const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  