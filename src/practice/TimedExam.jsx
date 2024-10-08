import React from 'react';
import { useLocation } from 'react-router-dom';

const TimedExam = () => {
    const location = useLocation();

    // Access the `from` state
    const previousPage = location.state?.from || 'Unknown';

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Big Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
            Timed Exam
        </h1>
        <p>You came from: {previousPage}</p>

        
      </div>
    );
};

export default TimedExam;