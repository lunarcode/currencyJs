(function($){

  $.fn.extend({
    formatoMoneda : function(userConfig){
             
        var txtMoneda = '';
        var valorOriginal = '';
        var elMoneda = '';
        var tipoTag = '';  
        var txtFormatoMoneda = '$0.00';


        $(this).each(function() {
            elMoneda = $(this);
            tipoTag = elMoneda[0].tagName;  

            if(tipoTag!='INPUT'){

                txtMoneda = $(this).html();
                valorOriginal = $(this).html();
                txtFormatoMoneda = generaFormatoMoneda();  
                elMoneda.html(txtFormatoMoneda);

            }

            if(tipoTag==='INPUT'){

                txtMoneda = $(this).val();
                valorOriginal = $(this).val();
                txtFormatoMoneda = generaFormatoMoneda();
                elMoneda.val(txtFormatoMoneda);
                
            }

        });


        function generaFormatoMoneda(){
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

                txtFormatoMoneda  = '$'+numeroResultado+'.'+partesMoneda[1];
            }else{
                txtFormatoMoneda = '$0.00';
            }

            return txtFormatoMoneda;
        }



    }
  });


})(jQuery)
