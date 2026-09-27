import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link href={`/workoutsLibrary/${exercise.id}`}>

            <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#15171c] text-white transition duration-300 hover:-translate-y-1 hover:border-lime-400/40">

                {/* Image */}
                <div className="relative h-80 w-full">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-10">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-3">
                        {exercise.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-5 py-2 text-base font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="mt-7 text-2xl font-black uppercase tracking-wide">
                        {exercise.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-2 text-xl text-gray-400">
                        {exercise.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-7 border-t border-white/10"></div>

                    {/* Stats */}
                    <div className="flex items-center gap-8 text-lg text-gray-400">

                        <div className="flex items-center gap-2">
                            <span>◷</span>
                            <span>{exercise.duration} min</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>●</span>
                            <span>{exercise.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>☆</span>
                            <span>{exercise.rating}</span>
                        </div>

                    </div>

                </div>
            </article>

        </Link>
    );
};

export default ExerciseCard;