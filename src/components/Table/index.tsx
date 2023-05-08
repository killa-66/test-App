import { Train } from '../../types'
import classes from './Table.module.css'

type Props = {
  trains: Train[];
  onSelect: (train: Train) => void;
}

const Table = ({trains, onSelect}: Props) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Название поезда</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
          {trains.map(train => 
            <tr key={train.name} onClick={() => onSelect(train)}>
              <td className={classes.table__subtitle}>{train.name}</td>
              <td className={classes.table__subtitle}>{train.description}</td>
            </tr>
          )}
        </tbody>
    </table>
  )
}

export default Table