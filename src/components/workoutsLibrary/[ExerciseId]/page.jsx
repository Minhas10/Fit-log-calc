import React from 'react';

const ExerciseDetailPage = async ({params}) => {
    const {ExerciseId}=await params;
    const res=await fetch (`https://api.abcz.workers.dev/api/fitlog/${ExerciseId}`)
    const exerciseData=await res.json();
    return (
        <div>
          detail page  
        </div>
    );
};

export default ExerciseDetailPage;