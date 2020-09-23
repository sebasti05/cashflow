const   monto   = document.getElementById('monto'),
        desc    = document.getElementById('desc'),
        fecha   = document.getElementById('fecha'),
        select  = document.getElementById('select'),
        form    = document.querySelector('form');


const guardar = (e) => {
    e.preventDefault();

    const inputMonto    = monto.value;
    const inputDesc     = desc.value;
    const inputFecha    = fecha.value;
    const inputSelect    = select.value;

    console.log(inputMonto, inputDesc, inputFecha, inputSelect);
}














    form.addEventListener( 'submit', guardar );