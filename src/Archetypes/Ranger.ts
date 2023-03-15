import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energy: EnergyType;
  static _instancesCount = 0;
  
  constructor(
    name: string,
  ) { 
    super(name);
    this._energy = 'stamina';
    Ranger._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;