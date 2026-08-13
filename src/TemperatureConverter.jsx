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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Temperature Converter
        </h1>
        {/* Temperature Input */}
        <label className="mb-2 block font-semibold text-gray-700">
          Enter Temperature
        </label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
          className="mb-5 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        />
        {/* Unit Selection */}
        <label className="mb-2 block font-semibold text-gray-700">
          Select Unit
        </label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="mb-6 w-full rounded-lg border border-gray-300 p-3 outline-none"
        >
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
        </select>
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={convertTemperature}
            className="flex-1 rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Convert
          </button>
          <button
            onClick={clearConverter}
            className="flex-1 rounded-lg bg-gray-500 px-5 py-3 font-semibold text-white hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
        {/* Result */}
        {result && (
          <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center">
            <p className="text-lg font-bold text-blue-700">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default TemperatureConverter;
