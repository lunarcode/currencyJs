var divMoneda = document.getElementById('moneda');
var txtMoneda = divMoneda.innerHTML;

txtMoneda = txtMoneda.replace(/[^\d.-]/g, '');

var partesMoneda = txtMoneda.split('.');

if(partesMoneda[0].length > 0){

    var largoMoneda = partesMoneda[0].length;
    var numeroComas = parseInt(largoMoneda/3);
    var primerComa  = largoMoneda%3;
    var numeroResultado = '';
        
    numeroResultado += partesMoneda[0].substr(0,primerComa);

    for ( var pos = 0; pos < numeroComas ; pos++ ){
        if( primerComa > 0 ){
            numeroResultado += ',';
        }
        numeroResultado += partesMoneda[0].substr(primerComa,3);
        primerComa+=3;

    }

    if(partesMoneda[1] == null ||  partesMoneda[1] == ''){
         partesMoneda[1] = '00'; 
    }
    
    console.log('$'+numeroResultado+'.'+partesMoneda[1]);
}else{
    console.log('$0.00');
}
