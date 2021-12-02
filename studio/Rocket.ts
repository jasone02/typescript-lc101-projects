import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let runningTotal = 0;
        for (let i = 0; i < items.length; i++) {
            runningTotal += items[i].massKg;
        }
        return runningTotal;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        let added = this.canAdd(cargo);
        if (added) {
            this.cargoItems.push(cargo);
        }
        return added;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let added = this.canAdd(astronaut);
        if (added) {
            this.astronauts.push(astronaut);
        }
        return added;
    }
 }