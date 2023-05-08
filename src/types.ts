export type Train = {
  name: string;
  description: string;
  speedLimits: SpeedLimit[];
}

export type SpeedLimit = { name: string; speedLimit: number }