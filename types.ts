export type Position = {
  latitude: number,
  longitude: number,
}

export type Spot = {
  position: Position
  reportedAt: Date
}

export const defaultPosition: Position = {
  latitude: 0,
  longitude: 0,
}

export const defaultSpots: Spot[] = []