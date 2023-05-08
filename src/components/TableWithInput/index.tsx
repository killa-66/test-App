import { SpeedLimit } from '../../types';
import classes from './TableWithInput.module.css'

type Props = {
   speedLimits: SpeedLimit[];
   trainName: string;
   onSend: () => void;
   onChange: (value: string, speeName: string) => void;
   onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function TableWithInput({speedLimits, trainName, onSend, onChange, onKeyPress}: Props) {
   return (
      <>
      <div className={classes.table__title}>{trainName}</div>
      <table className={classes.table_with_input}>
        <thead className={classes.table__subtitle}>
          <tr>
            <th className={classes.table__th_spacing}>Название</th>
            <th className={classes.table__th_spacing}>Скорость</th>
          </tr>
        </thead>
        <tbody>
            {speedLimits.map(speed => 
              <tr key={speed.name}>
                <td className={classes.table__td_spacing}>{speed.name}</td>
                <td className={classes.table__td_spacing}>
                  <input 
                    value={speed.speedLimit}
                    onChange={(e) => onChange(e.currentTarget.value, speed.name)}
                    onKeyPress={onKeyPress}
                    />
               </td>
              </tr>
            )}
          </tbody>
      </table>
      <button className={classes.table__button} onClick={onSend}>Send changes to server</button> 
      </>
    )
}

export default TableWithInput;