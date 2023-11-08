// Crea una funzione che converte tutte le proprietà di tipo 'number' all'interno di un oggetto in stringhe (comprese le proprietà annidate).

let piano = {
    owner: 'Alex',
    yearBought: 2021,
    keys: {
        whiteKeys: 52,
        blackKeys: 36,
    },  
}

const stringify = (obj)=>{
    const entries = Object.entries(obj);
    for(let i=0; i<entries.length; i++){
        let entry = entries[i]
        const key = entry[0];
        const value = entry[1];
        switch (typeof value){
            case 'number':
                obj[key] = value.toString();
                break;
            case 'object':
                stringify(obj[key]);
                break;  
        }
    }
}
stringify(piano);
console.log(piano);