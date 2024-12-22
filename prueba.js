console.log("probando desde archivo externo")
console.log(10)
console.log("10")
console.log(10+10)
console.log("10" + "10") //concatenar


console.log("la suma de 2 + 2 es: " + (2+2) ) //string + datos numericos

/*datos booleanos*/

console.log(true) //prendido 1
console.log(false) //falso 0
//usuario y contraseña : verdadero o falso

//variable espacio en memoria (caja) ---- Mayuscula en la segunda palabra

var nombreUsuario = "leonardo"
console.log("el nombre de usuario es: " + nombreUsuario )

//constantes (datos que se mantienen)

const IVA = 21

//algoritmo que suma variables

var numero1 = 20
var numero2 = 30
var sumaNumeros = numero1 + numero2

console.log(numero1 + numero2)
console.log("la suma de los numeros es: " + sumaNumeros)

//ejemplo

var saldo = 10000
var transferencia = 5000
var saldoFinal = saldo + transferencia
console.log("mi saldo actual es:" + saldoFinal)



//seccion productos carrito de compras


    let cart = [];
    let total = 0;

    function addToCart(product, price) {
        // Agregar producto al carrito
        cart.push({ product, price });
        total += price;

        // Actualizar la vista del carrito
        updateCartView();
    }

    function updateCartView() {
        const cartList = document.getElementById('cartList');
        const totalDisplay = document.getElementById('total');

        cartList.innerHTML = ''; // Limpiar la lista actual
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
        });

        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }

    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        verificarCampos();
        alert ("Formulario completo, Gracias")
    });

    function verificarCampos() {
        const form = document.getElementById('contactForm');
        const Nombre = form.name.value.trim();
        const Correo = form.email.value.trim();
        const Mensaje = form.message.value.trim();

        if (Nombre === '' || Correo === '' || Mensaje === '') {
            console.log('Por favor, completa todos los campos del formulario.');
        } else {
            console.log('Todos los campos están completos.'); 
            
        }
    }


