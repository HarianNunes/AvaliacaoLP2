import { Vegetables } from "../models/Vegetables";
import { VegetablesDAO } from "./VegetablesDAO";

export class VegetablesJsonDAO extends VegetablesDAO {
  constructor() {
    super("vegetables.json");
    const obj: Vegetables[] = JSON.parse(this._strVegetables);
    this._vegetables = obj;
  }
}
