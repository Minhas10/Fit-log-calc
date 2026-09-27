import Image from "next/image";
import React from "react";

const ExerciseDetailPage = async ({ params }) => {
    const { exerciseId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${exerciseId}`
    );

    const exerciseData = await res.json();

    return (
        <main className="min-h-screen bg-[#0d0f12] text-white">


            <section className="container mx-auto px-6 py-10 lg:py-12">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

                    <div className="relative h-[530px] w-full overflow-hidden rounded-xl">
                        <Image
                            src={exerciseData.image}
                            alt={exerciseData.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div>

                        {/* Name */}
                        <h1 className="text-4xl font-black uppercase leading-tight tracking-wide lg:text-5xl">
                            {exerciseData.name}
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-6 text-gray-400">
                            {exerciseData.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            {exerciseData.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#161920]">

                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Equipment
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Difficulty
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Sets
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.sets}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Reps
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.reps}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Duration
                                </span>
                                <span className="text-sm text-gray-200">
                                    {exerciseData.duration} min
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Calories
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.caloriesBurned} kcal
                                </span>
                            </div>
                            <div className="flex items-center justify-between px-5 py-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Rating
                                </span>

                                <span className="text-sm text-gray-200">
                                    {exerciseData.rating}
                                </span>
                            </div>

                        </div>
                        <h2 className="text-sm font-black uppercase tracking-wide pt-1">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-4">
                            {exerciseData.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-5 text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>
                                    </li>
                                )
                            )}
                        </ol>
                        <div className="mt-7 flex flex-wrap gap-3">

                        <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300">
                            Add to today's plan
                        </button>

                        <button className="rounded-lg border border-white/20 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5">
                            ♡ Save for later
                        </button>

                    </div>


                    </div>

                    
                </div>

            </section>

        </main>
    );
};

export default ExerciseDetailPage;