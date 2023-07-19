import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Label, LabelList, XAxis, YAxis } from "recharts";

export default function SexChart({ _data }) {
  //console.log(_data.map(row => row.age)
  const [data, setData] = useState([
    {
      'Male': _data.filter(row => row.Gender === 'Male').length,
      'Female': _data.filter(row => row.Gender === 'Female').length,
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
        <Bar dataKey="Male" fill="lightblue">
          <LabelList position="insideMiddle" fill="#000">Male</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#337733" formatter={() => `${(data[0]['Male'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
        <Bar dataKey="Female" fill="pink">
          <LabelList fill="#000">Female</LabelList>
          <LabelList style={{fontWeight: "bold"}} position="insideBottom" fill="#339933" formatter={() => `${(data[0]['Female'] / 29 * 100).toFixed(2)}%`} />
        </Bar>
      </BarChart>
    </div>
  )
}