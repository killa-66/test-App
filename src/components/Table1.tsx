import { useState, useEffect } from "react";
import { Trains } from './types'

const Table1 = () => {

const [trains, setTrains] = useState<Trains>([])
console.log(trains)

  useEffect(() => {
    fetch('http://localhost:3001/db')
      .then((res) => {
        if (res.ok) {
            return res.json()
        }
       return Promise.reject(`Error ${res.status}`)
      })
   .then(res => {
    console.log(res.data, 'result')
    setTrains(res.data)
  })

  }, []) 
  return (
    <table>
      <thead>
        <tr>
          <th>Название поезда</th>
          <th>Описание</th>
          <th>ограничение скорости</th>
        </tr>
      </thead>
      <tbody>
          {trains.map((train, index) => 
            <tr key={index}>
              <td>{train.name}</td>
              <td>{train.description}</td>
              <td>
                <ul>
                  {train.speedLimits.map((speedLimit, i) => (
                    <li key={i}>
                      {speedLimit.name}: {speedLimit.speedLimit} км/ч
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
    </table>
  )
}

export default Table1