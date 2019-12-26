import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }


export const toDate = dateStr => {
    const dateParts = dateStr.split('-');
    console.log(dateParts)
    return new Date(dateParts[0], dateParts[1]-1, dateParts[2]);
}