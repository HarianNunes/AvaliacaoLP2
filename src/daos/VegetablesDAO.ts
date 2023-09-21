import { join } from "path";
import { Vegetables } from "../models/Vegetables";
import { readFileSync } from "fs";

export class VegetablesDAO {
  protected _vegetables: Vegetables[];
  protected _strVegetables: string;

  constructor(filename: string) {
    const fileName = join(__dirname, "..", "data", filename);
    this._strVegetables = readFileSync(fileName, "utf-8");
    this._vegetables = [];
  }

  findVegetableById(number: number): Vegetables | undefined {
    const result = this._vegetables.find((c) => c.id === number);
    return result;
  }

  findVegetableByName(vegetableName: string): Vegetables | undefined {
    const result = this._vegetables.find(
      (c) => c.name.toLowerCase() === vegetableName.toLowerCase()
    );
    return result;
  }

  findVegetableByBenefits(benefits: string): Vegetables | undefined {
    const result = this._vegetables.find((c) =>
      c.benefits
        .split(",")
        .find((c) => c.toLowerCase() === benefits.toLowerCase())
    );
    return result;
  }
}
