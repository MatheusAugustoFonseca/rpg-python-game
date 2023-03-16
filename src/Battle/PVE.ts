import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _enemies: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  } 
}

export default PVE;