import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    // throw new Error('Method not implemented.');
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;