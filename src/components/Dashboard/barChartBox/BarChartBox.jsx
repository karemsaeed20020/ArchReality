import React from 'react';
import styles from './barChartBox.module.css';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";


const BarChartBox = (props) => {
  return (
    <div className={styles.barChartBox}>
    <h1>{props.title}</h1>
    <div className={styles.chart}>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{fill:"none"}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default BarChartBox
