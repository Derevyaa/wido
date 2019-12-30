import { parse } from 'papaparse';
import { readFileSync } from 'fs';

export class CSVParser{
    private filePlace; 
    constructor(filePlace: string) {
        this.filePlace = filePlace;
    }
 
    getFile(filePlace) {
        return readFileSync(filePlace, 'utf8');
    }
    
    getParseedData(file)  {
        return parse(file, {complete: (result) => result.data});
    };

    getData() {
        return this.getParseedData(this.getFile(this.filePlace))
    }

    display() {
      let  parseedData= this.getData();
        for (let i = 0; i < parseedData.data.length; i++) {
         let pd = parseedData.data[i];
         console.log ("Block1 : ." +pd);
        for (let j = 0; j <  pd.length; j++) {
          console.log ("Block2 : ." +pd[j]);
          } 
        }
 }

}

