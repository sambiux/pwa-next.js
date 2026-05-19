"use client";

import { useState } from "react";

interface Song {
  id: number;
  song: string;
  artist: string;
  duration: number;
  timesPerDay: number;
  totalMinutes: number;
}

export default function ClasificacionPage() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [duration, setDuration] = useState("");
  const [timesPerDay, setTimesPerDay] = useState("");

  const [songs, setSongs] = useState<Song[]>([]);

  function handleAddSong() {
    if (
      !songName ||
      !artistName ||
      !duration ||
      !timesPerDay
    ) {
      return;
    }

    const totalMinutes =
      Number(duration) * Number(timesPerDay);

    const newSong: Song = {
      id: Date.now(),
      song: songName,
      artist: artistName,
      duration: Number(duration),
      timesPerDay: Number(timesPerDay),
      totalMinutes,
    };

    const updatedSongs = [...songs, newSong].sort(
      (a, b) => b.totalMinutes - a.totalMinutes
    );

    setSongs(updatedSongs);

    setSongName("");
    setArtistName("");
    setDuration("");
    setTimesPerDay("");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-2">
          Ranking Musical 
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Calcula qué canciones escuchas más durante el día.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="Nombre canción"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
          />

          <input
            type="text"
            placeholder="Nombre artista"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
          />

          <input
            type="number"
            placeholder="Duración (min)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
          />

          <input
            type="number"
            placeholder="Veces al día"
            value={timesPerDay}
            onChange={(e) => setTimesPerDay(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-green-500"
          />
        </div>

        <button
          onClick={handleAddSong}
          className="w-full mb-8 bg-green-500 hover:bg-green-600 transition py-3 rounded-xl font-bold"
        >
          Agregar canción
        </button>

        <div className="bg-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-6 bg-zinc-700 p-4 font-semibold">
            <p>#</p>
            <p>Canción</p>
            <p>Artista</p>
            <p>Duración</p>
            <p>Veces/día</p>
            <p>Total diario</p>
          </div>

          {songs.length === 0 ? (
            <p className="text-center text-zinc-400 py-10">
              No hay canciones agregadas.
            </p>
          ) : (
            songs.map((song, index) => (
              <div
                key={song.id}
                className="grid grid-cols-6 p-4 border-t border-zinc-700 items-center"
              >
                <p className="font-bold text-green-400">
                  #{index + 1}
                </p>

                <p>{song.song}</p>

                <p>{song.artist}</p>

                <p>{song.duration} min</p>

                <p>{song.timesPerDay}</p>

                <p className="font-semibold text-yellow-400">
                  {song.totalMinutes} min
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}