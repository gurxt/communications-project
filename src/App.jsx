import { Legend, Tooltip } from "chart.js"
import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Label, LabelList, XAxis, YAxis } from "recharts"
import TableExample from "./Table"
import AgeChart from "./Age"
import SexChart from "./Sex"
import Trends from "./Trends"

const age =  [0, 1, 1, 0, 1, 2, 1, 3, 1, 0, 1, 2, 0, 0, 0, 2, 3, 1, 2, 0, 0, 1, 0, 1, 0, 1, 0, 2, 0]
const gender = [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0]
const education = [
  "2 years college diploma",
  "Master degree and above",
  "Master degree and above",
  "2 years college diploma",
  "Master degree and above",
  "Master degree and above",
  "Master degree and above",
  "2 years college diploma",
  "3-5 years bachelor degree",
  "2 years college diploma",
  "Master degree and above",
  "2 years college diploma",
  "2 years college diploma",
  "2 years college diploma",
  "3-5 years bachelor degree",
  "Master degree and above",
  "Master degree and above",
  "Master degree and above",
  "2 years college diploma",
  "3-5 years bachelor degree",
  "3-5 years bachelor degree",
  "Master degree and above",
  "2 years college diploma",
  "3-5 years bachelor degree",
  "3-5 years bachelor degree",
  "3-5 years bachelor degree",
  "3-5 years bachelor degree",
  "2 years college diploma",
  "2 years college diploma"
]
const timeUsage = [
  "above 8 hours",
  "4-8 hours",
  "4-8 hours",
  "1-3 hours",
  "4-8 hours",
  "above 8 hours",
  "1-3 hours",
  "4-8 hours",
  "4-8 hours",
  "4-8 hours",
  "4-8 hours",
  "4-8 hours",
  "1-3 hours",
  "4-8 hours",
  "above 8 hours",
  "4-8 hours",
  "above 8 hours",
  "1-3 hours",
  "4-8 hours",
  "above 8 hours",
  "1-3 hours",
  "above 8 hours",
  "4-8 hours",
  "4-8 hours",
  "1-3 hours",
  "4-8 hours",
  "above 8 hours",
  "1-3 hours",
  "4-8 hours"
];

const usage = [
    ["Multimedia", "Processing documents", "Gaming"],
    ["Processing documents", "Multimedia", null],
    ["Processing documents", "Multimedia", null],
    ["Multimedia", null, null],
    ["Processing documents", "Multimedia", null],
    ["Processing documents", "Multimedia", null],
    ["Multimedia", null, null],
    ["Processing documents", null, null],
    ["Processing documents", "Multimedia", null],
    ["Processing documents", "Multimedia", null],
    ["Processing documents", null, null],
    ["Multimedia", null, null],
    ["Processing documents", null, null],
    ["Multimedia", null, null],
    ["Processing documents", "Multimedia", null],
    ["Processing documents", null, null],
    ["Multimedia", null, null],
    ["Multimedia", null, null],
    ["Multimedia", "Processing documents", "Gaming"],
    ["Multimedia", "Processing documents", "Gaming"],
    ["Processing documents", null, null],
    ["Processing documents", "Multimedia", null],
    ["Multimedia", null, null],
    ["Multimedia", "Processing documents", "Gaming"],
    ["Multimedia", "Processing documents", "Gaming"],
    ["Multimedia", null, null],
    ["Multimedia", "Processing documents", "Gaming"],
    ["Processing documents", "Multimedia", null],
    ["Multimedia", null, null]
]

const screen = [
  "Laptop screen",
  "Both",
  "Both",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Both",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Laptop screen",
  "Both",
  "Both",
  "Laptop screen",
  "Both",
  "Both",
  "Both",
  "Both",
  "Both",
  "Both",
  "Both",
  "Both",
  "Laptop screen",
  "Both"
];

const importance_size = [5, 5, 5, 3, 4, 5, 3, 5, 5, 4, 5, 3, 5, 4, 3, 4, 4, 5, 5, 3, 4, 4, 3, 3, 3, 3, 3, 5, 3];
const importance_panel = [3, 3, 5, 3, 3, 5, 4, 4, 5, 5, 4, 5, 3, 1, 4, 5, 5, 1, 3, 4, 3, 3, 2, 5, 4, 3, 3, 3, 5];
const importance_resolution = [3, 4, 5, 4, 3, 5, 4, 3, 5, 3, 5, 5, 4, 5, 4, 4, 4, 5, 4, 3, 4, 3, 5, 4, 4, 5, 5, 4, 3];
const importance_refresh = [3, 4, 5, 5, 4, 5, 3, 3, 5, 3, 4, 5, 4, 3, 4, 5, 5, 4, 3, 3, 5, 3, 4, 5, 4, 4, 3, 3, 4];
const importance_contrast = [3, 4, 4, 4, 5, 3, 4, 2, 5, 3, 5, 5, 4, 3, 5, 3, 4, 5, 3, 5, 1, 5, 3, 5, 3, 4, 4, 4, 3];
const importance_brightness = [5, 4, 3, 5, 5, 4, 4, 2, 3, 5, 2, 5, 2, 4, 5, 3, 5, 5, 2, 5, 2, 2, 3, 5, 5, 5, 5, 3, 5];

const raw_data = []

for (let i=0; i < 29; i++) {
  raw_data.push(i)
}

const convertAge = (value) => {
  if (value === 0) return '18-25'
  if (value === 1) return '26-35'
  if (value === 2) return '36-45'
  if (value === 3) return '>45'
}

const convertGeneder = (value) => {
  if (value === 0) return 'Male'
  if (value === 1) return 'Female'
}

const data = raw_data.map(idx => {
  return { 
    'Age': convertAge(age[idx]),
    'Gender': convertGeneder(gender[idx]),
    'Education': education[idx],
    'Time Usage': timeUsage[idx],
    'Usage': usage[idx],
    'Screen': screen[idx],
    'Size': importance_size[idx],
    'Panel': importance_panel[idx],
    'Resolution': importance_resolution[idx],
    'Refresh Rate': importance_refresh[idx],
    'Contrast': importance_contrast[idx],
    'Brightness': importance_brightness[idx],
  }
})

import Title from "/src/assets/title.png"
import AgeTrends from "./AgeTrends"

export default function App() {
  const [slide, setSlide] = useState(0)

  return (
      <main style={{ backgroundColor: '#02273b' }} className="flex flex-col items-center justify-center w-full h-full p-10 text-slate-200 overflow-hidden">
      { slide === 0 && (
        <>
        <img src={Title} className="w-1/2 h-1/2" />
        <button 
          className="w-96 px-4 py-4 text-xl rounded hover:text-red-400"
          style={{ backgroundColor: "#03384c" }} 
          onClick={() => setSlide(1)}
        >
        START PRESENTATION
        </button>
        </>
      )}
      {
        slide === 1 && (
          <div className="flex flex-col items-center justify-center w-2/3 h-3/4">
            <div className="text-2xl mb-5">Raw Data</div>
            <TableExample data={data} />
            <div className="pt-10 flex flex-row w-full items-center justify-center">
              <button 
                className="w-64 px-4 py-4 text-xl rounded hover:text-red-400"
                style={{ backgroundColor: "#03384c" }} 
                onClick={() => setSlide(prev => (prev - 1))}
              >
              PREVIOUS SLIDE 
              </button>
              <button 
                className="w-64 ml-5 px-4 py-4 text-xl rounded hover:text-red-400"
                style={{ backgroundColor: "#03384c" }}
                onClick={() => setSlide(prev => (prev + 1))}
              >
              NEXT SLIDE 
              </button>
            </div>
          </div>
      )}
      { slide === 2 && (
        <>
          <div className="text-2xl mb-10">Participants Age</div>
          <AgeChart _data={data} />
          <div className="pt-10 flex flex-row w-full items-center justify-center">
            <button 
              className="w-64 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }} 
              onClick={() => setSlide(prev => (prev - 1))}
            >
            PREVIOUS SLIDE 
            </button>
            <button 
              className="w-64 ml-5 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }}
              onClick={() => setSlide(prev => (prev + 1))}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
      { slide === 3 && (
        <>
          <div className="text-2xl mb-2">Preferences Based on Age</div>
          <div className="text-sm mb-10 italic">*mean calculation for each category</div>
          <AgeTrends _data={data} />
          <div className="pt-10 flex flex-row w-full items-center justify-center">
            <button 
              className="w-64 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }} 
              onClick={() => setSlide(prev => (prev - 1))}
            >
            PREVIOUS SLIDE 
            </button>
            <button 
              className="w-64 ml-5 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }}
              onClick={() => setSlide(prev => ((prev + 1) % 6))}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
      { slide === 4 && (
        <>
          <div className="text-2xl mb-10">Participants Gender</div>
          <SexChart _data={data} />
          <div className="pt-10 flex flex-row w-full items-center justify-center">
            <button 
              className="w-64 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }} 
              onClick={() => setSlide(prev => (prev - 1))}
            >
            PREVIOUS SLIDE 
            </button>
            <button 
              className="w-64 ml-5 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }}
              onClick={() => setSlide(prev => (prev + 1))}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
      { slide === 5 && (
        <>
          <div className="text-2xl mb-2">Male, Female, and Gamer Preferences</div>
          <div className="text-sm mb-10 italic">*mean calculation for each category</div>
          <Trends _data={data} />
          <div className="pt-10 flex flex-row w-full items-center justify-center">
            <button 
              className="w-64 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }} 
              onClick={() => setSlide(prev => (prev - 1))}
            >
            PREVIOUS SLIDE 
            </button>
            <button 
              className="w-64 ml-5 px-4 py-4 text-xl rounded hover:text-red-400"
              style={{ backgroundColor: "#03384c" }}
              onClick={() => setSlide(0)}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
    </main>
  )
}