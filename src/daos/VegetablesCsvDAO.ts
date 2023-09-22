import { Vegetables } from "../models/Vegetables";
import { VegetablesDAO } from "./VegetablesDAO";

export class VegetablesCsvDAO extends VegetablesDAO {
  constructor() {
    super("vegetables.csv");
    //A constante arr recebe a string do arquivo csv convertida em array de strings, dividida por \r\n
    const vegetableArray = this._strVegetables.split("\r\n").splice(1, 22);
    //O laço for percorre o array 'arr' e cria um objeto Vegetables para cada linha do arquivo
    vegetableArray.forEach((c, i) => {
      let vegetableObj: Vegetables = {
        id: 0,
        name: "",
        imageURL: "",
        benefits: "",
      }
      //A constante indexArray recebe o indice do array 'arr' que corresponde ao objeto atual, e a divide em array de strings divididas por '"'    
      const indexArray = c.split('"');
      //O laço for percorre o array 'indexArray'
      for (let j = 0; j < indexArray.length - 1; j++) {
        //A constante vegetableObjIndex recebe o indice do array 'indexArray' que corresponde à linha atual do respectivo objeto, dividida por ","
        const vegetableObjIndex = indexArray[j].split(",");
        //Se j for par, entra no if e atribui os valores às propriedades do primeiro índice do objeto
        if (j % 2 == 0) {
          vegetableObj.id = Number(vegetableObjIndex[0]);
          vegetableObj.name = vegetableObjIndex[1];
          vegetableObj.imageURL = vegetableObjIndex[2];
          //Se j for impar, atribui os valores às propriedades do segundo índice do objeto e adiciona o objeto ao array _vegetables
        } else {
          vegetableObj.benefits = vegetableObjIndex.join(",");
          this._vegetables.push(vegetableObj);
        }
      }

    })
  }
}
