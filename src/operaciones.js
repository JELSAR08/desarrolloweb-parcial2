import * as fs from 'fs';

export const EscribirJson = () => {

    const persona = {
      "nombre":"Pedro",
      "apellido": "Arias",
      "edad": 58,
      "salario": 2500,
      "activo": true
    }
      
      const contenido = JSON.stringify(persona, null, 4);

      const path = './data/archivo.json';
      
      fs.writeFile(path, contenido, (error) => {
        if (error) console.log(error);
        
        console.log(`El archivo '${path}' se ha creado correctamente.`);
        
      });
    
}

export const LeerJson = () => {

    fs.readFile('./data/archivo.json', (error, contenido) => {
        if (error) console.log(error);
        
        const objeto = JSON.parse(contenido);
        
        console.log(objeto);
    })
}