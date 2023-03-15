import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    // throw new Error('Method not implemented.');
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;