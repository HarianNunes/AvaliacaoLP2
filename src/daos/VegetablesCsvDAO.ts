import { Vegetables } from "../models/Vegetables";
import { VegetablesDAO } from "./VegetablesDAO";

export class VegetablesCsvDAO extends VegetablesDAO {
  constructor() {
    super("vegetables.csv");
    //A constante arr recebe a string do arquivo csv convertida em array de strings, dividida por \r\n
    const arr = this._strVegetables.split("\r\n").splice(1, 22);
    //O laço for percorre o array 'arr' e cria um objeto Vegetables para cada linha do arquivo
    for (let i = 0; i < arr.length; i++) {
      let vegetable: Vegetables = {
        id: 0,
        name: "",
        imageURL: "",
        benefits: "",
      };
      //A constante vegetalArr recebe o indice do array 'arr' que corresponde ao objeto atual, e a divide em array de strings divididas por '"'
      const vegetalArr = arr[i].split('"');
      //O laço for percorre o array 'vegetalArr'
      for (let j = 0; j < vegetalArr.length - 1; j++) {
        //A constante line recebe o indice do array 'vegetalArr' que corresponde à linha atual do respectivo objeto, dividida por ","
        const line = vegetalArr[j].split(",");
        //Se j for par, entra no if e atribui os valores às propriedades do primeiro índice do objeto 
        if (j % 2 == 0) {
          vegetable.id = Number(line[0]);
          vegetable.name = line[1];
          vegetable.imageURL = line[2];
          //Se j for impar, atribui os valores às propriedades do segundo índice do objeto e adiciona o objeto ao array _vegetables
        } else {
          vegetable.benefits = line.join(",");
          this._vegetables.push(vegetable);
        }
      }
    }
  }
}
