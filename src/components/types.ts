// export interface SpeedLimit {
//   name: string,
//   speedLimit: 1
// }

import { type } from "os"

// export interface Train {
//   name: string,
//   description: string,
//   speedLimits: Array<{ name: string; speedLimit: number }>;
// }

// export interface TableProps {
//   trains: ITrain[];
// }

export type Train = {
  name: string,
    description: string,
    speedLimits: Array<{ name: string; speedLimit: number }>;
}

export type Trains = Train[]