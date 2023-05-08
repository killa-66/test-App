import React, { useEffect, useState } from 'react';
import TrainTable from '../Table'
import { Train } from '../../types';
import SpeedTable from '../TableWithInput';

function Main() {
   const [trains, setTrains] = useState<Train[]>([])
   const [selectedTrain, setSelectedTrain]= useState<Train | null>(null)

   const onSend = () => {
    if(selectedTrain) {
      const sortedData = [...selectedTrain.speedLimits].sort((a, b) => a.speedLimit - b.speedLimit)
      console.log('Новые ограничения скорости', sortedData)
    }
   };

   const onChange = (value: string, speedName: string) => {
      if (selectedTrain) {
         const newSpeedLimits = selectedTrain.speedLimits.map( speed => {
            if (speedName === speed.name) {
               return {...speed, speedLimit: +value}
            }
            return speed
         })
   
         const newTrains = trains.map( train => {
            if (selectedTrain.name === train.name) {
               return {...train, speedLimits: newSpeedLimits}
            }
            return train
         })
         setSelectedTrain({...selectedTrain, speedLimits: newSpeedLimits})
         setTrains(newTrains)
      }
   };

   const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key
  
    if (!/^[0-9]$/.test(keyValue)) {
      event.preventDefault();
  }
}

   useEffect(() => {
      fetch('http://localhost:3001/db')
        .then((res) => {
          if (res.ok) {
              return res.json()
          }
         return Promise.reject(`Error ${res.status}`)
        })
     .then(res => {
      setTrains(res.data)
    })
   }, []) 

   return (
      <div>
         <TrainTable trains={trains} onSelect={setSelectedTrain}/>
         {selectedTrain && (
            <SpeedTable
               trainName={selectedTrain.name}
               speedLimits={selectedTrain.speedLimits}
               onSend={onSend}
               onChange={onChange}
               onKeyPress={onKeyPress}
            />)}
      </div>
   );
}

export default Main;