import React from 'react';
import ExerciseCard from './ExerciseCard';

const WorkoutsPage = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const exercises = await res.json();

    return (
        <section className='container mx-auto px-4 py-10'>
            <div className="mb-6">
                <h1 className="text-3xl font-black uppercase text-white">
                    THE LIBRARY
                </h1>

                <p className="text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className='grid grid-cols-1 gap-5 items-start md:grid-cols-2 s lg:grid-cols-3 '>

                {exercises.map((exercise) =>
                (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                    />


                ))}
            </div>
        </section>
    )
};

export default WorkoutsPage;