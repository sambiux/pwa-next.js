"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [songsPerDay, setSongsPerDay] = useState(20);
  const [avgSongMinutes, setAvgSongMinutes] = useState(3);
  const [daysPerWeek, setDaysPerWeek] = useState(7);

  const results = useMemo(() => {
    const minutesPerDay = songsPerDay * avgSongMinutes;
    const hoursPerDay = minutesPerDay / 60;

    const minutesPerWeek = minutesPerDay * daysPerWeek;
    const hoursPerWeek = minutesPerWeek / 60;

    const minutesPerMonth = minutesPerDay * 30;
    const hoursPerMonth = minutesPerMonth / 60;

    const minutesPerYear = minutesPerDay * 365;
    const hoursPerYear = minutesPerYear / 60;

    return {
      minutesPerDay,
      hoursPerDay,
      minutesPerWeek,
      hoursPerWeek,
      minutesPerMonth,
      hoursPerMonth,
      minutesPerYear,
      hoursPerYear,
    };
  }, [songsPerDay, avgSongMinutes, daysPerWeek]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
        <h1 className="text-4xl font-bold text-center mb-2">
          Calculadora Musical 
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Descubre cuánto tiempo pasas escuchando música.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Canciones por día
            </label>

            <input
              type="number"
              value={songsPerDay}
              min={0}
              onChange={(e) => setSongsPerDay(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Duración promedio (min)
            </label>

            <input
              type="number"
              value={avgSongMinutes}
              min={0}
              onChange={(e) => setAvgSongMinutes(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Días que escucha música
            </label>

            <input
              type="number"
              value={daysPerWeek}
              min={0}
              max={7}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
               Tiempo diario
            </h2>

            <p className="text-3xl font-bold text-green-400">
              {results.minutesPerDay.toFixed(0)} min
            </p>

            <p className="text-zinc-400 mt-2">
              {results.hoursPerDay.toFixed(2)} horas al día
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
               Tiempo semanal
            </h2>

            <p className="text-3xl font-bold text-blue-400">
              {results.minutesPerWeek.toFixed(0)} min
            </p>

            <p className="text-zinc-400 mt-2">
              {results.hoursPerWeek.toFixed(2)} horas por semana
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
               Tiempo mensual
            </h2>

            <p className="text-3xl font-bold text-pink-400">
              {results.minutesPerMonth.toFixed(0)} min
            </p>

            <p className="text-zinc-400 mt-2">
              {results.hoursPerMonth.toFixed(2)} horas por mes
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
               Tiempo anual
            </h2>

            <p className="text-3xl font-bold text-yellow-400">
              {results.minutesPerYear.toFixed(0)} min
            </p>

            <p className="text-zinc-400 mt-2">
              {results.hoursPerYear.toFixed(2)} horas por año
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}