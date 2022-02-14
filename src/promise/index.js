// Declarar variables para trabajar con las funciones es6
const somethingWillHappen = () => {
    // retormar la nueva promesa
    return new Promise((resolve, reject) => {
        //validacion
        if(true) {
            // Resultado en el caso de que el codigo sea verdaderp
            resolve('Hey!');
        } else {
            // Resultado en el caso de que el codigo sea falso
            reject('whoooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Como hacer una peticion, y tener en cuenta el tiempo para tu ejecucion
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        //Validacion del codigo
        if(true) {
            //setTime recibe 2 argumentos
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Woooops!');
        }
    });
}


somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

// Como correr varias cadenas al mismo tiempo o encadenadas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    // Con esto nos regresa las 2 promesas
    console.log('Array of results', response);
})
// por si da error
    .catch(err => {
        console.error(err);
    });