import { Racer } from "../interfaces/Racer";

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
  return racers.filter(racer => racer.isFuelEmpty());
}

export function findAverageSpeed(racers: Racer[]): number {
  if (racers.length === 0) return 0;
  const totalSpeed = racers.reduce((sum, racer) => sum + racer.speed, 0);
  return totalSpeed / racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
  if (racerA.speed > racerB.speed) return racerA;
  if (racerB.speed > racerA.speed) return racerB;
  return null;
}
