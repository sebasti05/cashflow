const   monto = document.getElementById('monto'),
        desc  = document.getElementById('desc'),
        fecha = document.getElementById('fecha'),
        select= document.getElementById('select'),
        form  = document.querySelector('form'),
        tabla = document.querySelector('table'),       
    storage   = window.localStorage;
let arrayReg  = [];

const guardar = (e) => {
    e.preventDefault();
    const   inputMonto  = monto.value,
    inputDesc   = desc.value,
    inputFecha  = fecha.value,
    inputSelect = select.value;

    creaObjeto( inputMonto, inputDesc, inputFecha, inputSelect );
    form.reset(); 
    
    storage.setItem('registro', JSON.stringify( arrayReg ));
    let loadStorage = JSON.parse(storage.getItem('registro'));
    console.log(loadStorage);
    console.log(arrayReg);
}



const creaObjeto = ( monto, desc, fecha, select ) => {
class Registro {
        constructor( monto, desc, fecha, select ){
            this.monto  = monto;
            this.desc   = desc;
            this.fecha  = fecha;
            this.select = select;
        }
    }
    let newReg = new Registro( monto, desc, fecha, select );
    arrayReg = [  ...arrayReg, newReg ];
    return arrayReg;
}





const init = () => {
    document.addEventListener("DOMContentLoaded",() => { 
        form.addEventListener( 'submit', guardar );
      });
}

init();



