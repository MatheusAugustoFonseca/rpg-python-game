interface Energy {
  type_: EnergyType;
  amount: number;
}

export type EnergyType = 'mana' | 'stamina';
export default Energy;
