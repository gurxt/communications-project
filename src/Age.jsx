import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Label, LabelList, XAxis, YAxis } from "recharts";

export default function AgeChart({ _data }) {
  //console.log(_data.map(row => row.age)
  const [data, setData] = useState([
    {
      '18-25': _data.filter(row => row.Age === '18-25').length,
      '26-35': _data.filter(row => row.Age === '26-35').length,
      '36-45': _data.filter(row => row.Age === '36-45').length,
      '>45': _data.filter(row => row.Age === '>45').length
    }
  ]
  )

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div className="flex flex-center text-white">
      <BarChart
        width={1000} 
        height={500} 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#02273b" strokeDasharray="3 3" />
        <XAxis fill="#ffffff" dataKey="name" stroke="#fff" />
        <YAxis fill="#ffffff" stroke="#fff" />
        <Bar dataKey="18-25" fill="#fff9">
          <LabelList position="insideMiddle" fill="#000">18-25</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#337733" formatter={() => `${(data[0]['18-25'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
        <Bar dataKey="26-35" fill="#fff9">
          <LabelList fill="#000">26-35</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#336633" formatter={() => `${(data[0]['26-35'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
        <Bar dataKey="36-45" fill="#fff9">
          <LabelList fill="#000">36-45</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#994433" formatter={() => `${(data[0]['36-45'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
        <Bar value=">45" dataKey=">45" fill="#fff9">
          <LabelList fill="#000">gt. 45</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#993322" formatter={() => `${(data[0]['>45'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
      </BarChart>
    </div>
  )
}