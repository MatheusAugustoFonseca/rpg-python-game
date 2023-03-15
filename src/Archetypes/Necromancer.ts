import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  static _instancesCount = 0;
  
  constructor(
    name: string,
  ) { 
    super(name);
    this._energy = 'mana';
    Necromancer._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;