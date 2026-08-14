import React, { useState } from "react";
function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");
  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter a temperature.");
      return;
    }
    const value = Number(temperature);
    if (unit === "C") {
      const fahrenheit = (value * 9) / 5 + 32;
      setResult(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
    } else {
      const celsius = ((value - 32) * 5) / 9;
      setResult(`${value}°F = ${celsius.toFixed(2)}°C`);
    }
  };
  const clearConverter = () => {
    setTemperature("");
    setUnit("C");
    setResult("");
  };
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Practical Title */}
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
          Practical 9
        </p>
        <h1 className="mt-2 mb-8 text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]">
          Temperature Converter
        </h1>

        {/* Converter Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-orange-500/10 text-left">
          {/* Temperature Input */}
          <label className="mb-2 block text-sm font-semibold text-gray-400">
            Enter Temperature
          </label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter temperature"
            className="mb-5 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
          />

          {/* Unit Selection */}
          <label className="mb-2 block text-sm font-semibold text-gray-400">
            Select Unit
          </label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="mb-6 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white outline-none transition focus:border-orange-500"
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
          </select>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={convertTemperature}
              className="flex-1 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Convert
            </button>
            <button
              onClick={clearConverter}
              className="flex-1 rounded-lg bg-gray-700 px-5 py-3 font-semibold text-white transition hover:bg-gray-600"
            >
              Clear
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-6 rounded-xl bg-gray-950 p-4 text-center ring-1 ring-orange-500/30 shadow-[0_0_15px_rgba(251,146,60,0.15)]">
              <p className="text-lg font-bold text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default TemperatureConverter;
