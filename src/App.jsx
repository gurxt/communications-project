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
import Summary from "/src/assets/summary.png"
import Assumptions from "/src/assets/assumption.png"
import Index from "/src/assets/index.png"
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
      { slide === 1 && (
          <div className="flex flex-col items-center justify-center w-2/3 h-3/4">
            <div className="text-2xl mb-2 underline font-bold">Index</div>
            <div className="flex flex-row items-center justify-center w-full">
              <img src={Index} className="w-1/3 h-3/4 pr-4" />
              <ul className="list-decimal w-1/3 mb-2">
                <li className="p-2">Introduction (By Alfred)</li>
                <li className="p-2">Data Collection & General Results (By Kezia)</li>
                <li className="p-2">Assumptions (By Anthony)</li>
                <li className="p-2">Results of Assumptions (By Kowiy)</li>
                <li className="p-2">Conclusion (By Alfred)</li>
              </ul>
            </div>
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
      {
        slide === 2 && (
          <div className="flex flex-col items-center justify-center w-2/3 h-3/4">
            <div className="text-2xl mb-2 underline font-bold">Raw Data</div>
            <ul className="list-disc w-full mb-2">
              <li className="p-2"><b>Dependent variables:</b> size, panel types, resolution, refresh rate, contrast, and brightness</li>
              <li className="p-2"><b>Independent variables:</b> respondents age range, gender, education level, computer usage, purpose of usage, and type of screen preference </li>
              <li className="p-2"><b>General results:</b> screen resolution and size were highest rated and screen panel types was the least rated</li>
            </ul>
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
      { slide === 3 && (
        <>
          <div className="text-2xl mb-10 underline font-bold">Assumptions</div>
          <div className="flex flex-row justify-center items-center w-1/2 h-1/2">
            <img src={Assumptions} className="w-1/2 h-full" />
            <ul className="list-disc w-1/3">
              <li className="p-2">Younger participants are more likely than older participants to care about screen specifications</li>
              <li className="p-2">Men are more likely than women to care about screen specifications</li>
              <li className="p-2">Gamers are most likely to care about screen specifications</li>
            </ul>
          </div>
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
      { slide === 4 && (
        <>
          <div className="text-2xl mb-2 font-bold underline">Participants Age</div>
            <ul className="list-disc w-1/2 mb-5">
              <li className="p-2">Of the 29 participants surveyed, 76% were between the ages of 18-35 and 24% were above the age of 36</li>
              <li className="p-2">Our assumption is that the results will exhibit negative linear scaling</li>
            </ul>
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
      { slide === 5 && (
        <>
          <div className="text-2xl mb-2 underline font-bold">Preferences Based on Age</div>
          <div className="text-sm mb-2 italic">*mean calculation for each category</div>
            <ul className="list-disc w-1/3 mb-2">
              <li className="p-2">Screen size and panel both scale linearly</li>
              <li className="p-2">Ages 26-45 showed high preferences for resolution, refresh rate, and contrast</li>
              <li className="p-2">18-25 year olds showed a high preference for brightness</li>
            </ul>
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
              onClick={() => setSlide(prev => ((prev + 1)))}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
      { slide === 6 && (
        <>
          <div className="text-2xl mb-10 underline font-bold">Participants Gender</div>
          <ul className="list-disc w-1/2 mb-5">
            <li className="p-2">Of the 29 participants 16 were female, 13 were male</li>
            <li className="p-2">Our assumption is that men are more likely to care about screen specifications than women</li>
          </ul>
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
      { slide === 7 && (
        <>
          <div className="text-2xl mb-2 underline font-bold">Male, Female, and Gamer Preferences</div>
          <div className="text-sm mb-2 italic">*mean calculation for each category</div>
          <ul className="list-disc w-1/2 mb-5">
            <li className="p-2">6 gamers were added to the table to test the last assumption</li>
            <li className="p-2">Men in general did care more about specifications showing high preferences for panel, resolution, and refresh rate</li>
            <li className="p-2">Gamers only showed a higher preference for brightness</li>
          </ul>
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
              onClick={() => setSlide(prev => (prev + 1))}
            >
            NEXT SLIDE 
            </button>
          </div>
        </>
      )}
      { slide === 8 && (
        <>
          <div className="text-2xl mb-2 underline font-bold">Conclusion</div>
          <div className="flex flex-row justify-center items-center w-1/2 h-1/2">
            <img src={Summary} className="w-2/5 h-3/5 p-5" />
            <ul className="list-disc w-2/3">
              <li className="p-2">Screen resolutions and size polled strongly</li>
              <li className="p-2">Participants from ages 26-45 showed the highest preference for overall screen attributes</li>
              <li className="p-2">Overall men cared the most about preferences, inline with our assumption based on gender, but not inline with out assumption that gamers were to show stronger preferences</li>
              <li className="p-2">It is difficult to make broad generalizations with a small sample size</li>
            </ul>
          </div>
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
            BACK TO START
            </button>
          </div>
        </>
      )}
      { slide === 9 && (
          <div className="flex flex-col items-center justify-center w-2/3 h-3/4">
            <div className="text-2xl mb-2 underline font-bold">Index</div>
            <div className="flex flex-row items-center justify-center w-full">
              <img src={Index} className="w-1/3 h-3/4 pr-4" />
              <ul className="list-decimal w-1/3 mb-2">
                <li className="p-2">Introduction (By Alfred)</li>
                <li className="p-2">Data Collection & General Results (By Kezia)</li>
                <li className="p-2">Assumptions (By Anthony)</li>
                <li className="p-2">Results of Assumptions (By Kowiy)</li>
                <li className="p-2">Conclusion (By Alfred)</li>
              </ul>
            </div>
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
          </div>
      )}
    </main>
  )
}