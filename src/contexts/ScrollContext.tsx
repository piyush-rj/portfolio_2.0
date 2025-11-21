'use client';
import { createContext, useContext, RefObject } from 'react';

interface ScrollContextType {
  introRef: RefObject<HTMLDivElement | null> | null;
  projectsRef: RefObject<HTMLDivElement | null> | null;
  careersRef: RefObject<HTMLDivElement | null> | null;
  techStackRef: RefObject<HTMLDivElement | null> | null;
}

const ScrollContext = createContext<ScrollContextType>({
  introRef: null,
  projectsRef: null,
  careersRef: null,
  techStackRef: null,
});

export const useScroll = () => useContext(ScrollContext);
export default ScrollContext;