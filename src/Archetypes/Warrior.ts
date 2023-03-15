import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energy: EnergyType;
  static _instancesCount = 0;
  
  constructor(
    name: string,
  ) { 
    super(name);
    this._energy = 'stamina';
    Warrior._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;