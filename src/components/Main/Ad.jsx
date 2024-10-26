import React, { useState, useEffect } from 'react';

const Ad = () => {
  const [adData, setAdData] = useState(null);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    // Fetch ad data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        setAdData(data.products);
      } catch (error) {
        console.error('Error fetching ad data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePreviousAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex > 0? prevIndex - 1 : adData.length - 1));
  };

  const handleNextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex < adData.length - 1? prevIndex + 1 : 0));
  };

  if (!adData) {
    return <div>Loading...</div>;
  }

  const currentAd = adData[currentAdIndex];

  return (
    <div className="bg-gray-900 text-white p-2 rounded-lg w-9/12 mx-auto my-auto mt-56 md:mt-20 relative top-32 sm:top-20"
> {/* Reduce padding and width, and margin top to 10px */}
    <div className="flex justify-between items-center h-full">
  <button onClick={handlePreviousAd} className="text-xl "> 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button onClick={handleNextAd} className="text-xl "> 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-1"> {/* Reduce margin top to 1px */}
        <div className="md:w-1/2 pl-24">
          <h2 className="text-2xl font-bold mb-1"> {/* Reduce font size */}
            {currentAd.title}
          </h2>
          <p className="text-md mb-2"> {/* Reduce font size */}
            {currentAd.description}
          </p>
          <a href={currentAd.thumbnail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2 mt-1 md:mt-0"> {/* Reduce margin top to 1px */}
          <img src={currentAd.thumbnail} alt={currentAd.title} className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <div className="flex mt-1"> {/* Reduce margin top to 1px */}
        {Array.from({ length: adData.length }, (_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 rounded-full mx-1 ${
              index === currentAdIndex? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Ad;
