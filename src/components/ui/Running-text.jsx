import React from 'react';

const RunningText = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white py-1 font-poppins">
      <div className="inline-block min-w-full animate-marquee text-lg font-medium text-green-800 font-semibold">
        {text}
      </div>
    </div>
  );
};

export default RunningText;
