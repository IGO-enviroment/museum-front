import { MutableRefObject, useEffect } from 'react';

export const useIntersectionObserver = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = new window.IntersectionObserver(([entry]) => {
        callback(entry);
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, [ref, options]);
};
