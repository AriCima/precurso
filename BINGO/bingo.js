
//  FUNCIONA EN EL TERMINAL Y NO EN EL CHROME ?????

/*
function bingo(){

    //var nombre = window.prompt('Ingresa tu nombre', 'nombre');

    var carton = [[],[],[]];
    for (fil=0; fil<=2; fil++){
        for(col=0; col<=4; col++){
            carton[fil][col] = Math.round(Math.random()*100);
        };
    };
    console.log(carton);
    
    var iteraciones = 0;
    var cont = 0;
    
    while (cont<15) {

        var newBall = Math.round(Math.random()*100);
        iteraciones = iteraciones + 1;
      
        for (fil=0; fil<=2; fil++){        

            for (col=0; col<=4; col++){         

                if (newBall === carton[fil][col]) {   
                    carton[fil][col] = 'X';
                    cont = cont+1;
                    console.log(carton);
                };

            };
            
        };
    };  
  
    console.log('Las iteraciones necesarias fueron: ' + iteraciones);
};

bingo();


*/

//  FUNCIONA EN TERMINAL

function bingo(){

    //var nombre = window.prompt('Ingresa tu nombre', 'nombre');


    //Genero cartón
    var carton = [[],[],[]];
    for (fil=0; fil<=2; fil++){
        for(col=0; col<=4; col++){
            carton[fil][col] = Math.round(Math.random()*100);
        };
    };
    console.log(carton);
    
    var iteraciones = 0;
    var cont = 0;
    var linea = [0,0,0,0,0];

    
    while (cont<15){                                // proceso de comparación

        var newBall = Math.round(Math.random()*100);
        iteraciones = iteraciones + 1;
      

        for (fil=0; fil<=2; fil++){        // ---> Iteración de filas

            for (col=0; col<=4; col++){         // ---> Iteración de columnas (componentes del vector)

                if (newBall === carton[fil][col]) {   // comparo la bola sacada con cada elemento de los vectores
                    carton[fil][col] = 'X';
                    linea[fil] = linea[fil]+1;   // contador de nros acertados en una fila
                    cont = cont+1;
                    console.log(carton);
                    
                    if (linea[fil] === 5) {
                        cont = 15;     // salida del While para preguntar si se desea continuar  NO FUNCIONA!
                        console.log('Felicitaciones tu fila nro ' + (fil+1) + ' está completa!');
                    };
                };

                

            };
            
        };
    };  
  
    console.log('Las iteraciones necesarias fueron: ' + iteraciones);
};

bingo();