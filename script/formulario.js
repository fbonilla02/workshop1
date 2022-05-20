import PostData from "../helpers/postData.js";

const form1 =document.getElementById("Formulario")
        // onsubmit sirve para asociar una funcion de test de algun formulario
          form1.onsubmit=(Bnb)=>{
            //   por si sucede algo cancela el evento 
            Bnb.preventDefault();
            let product =document.getElementById("F1").value
            let price =document.getElementById("F3").value
            let description =document.getElementById("F4").value
            let img =document.getElementById("F5").value
            if(product === '' || price === '' ||  description === '' || img === ''   ){

        }
        const UpProduct={
            id: crypto.randomUUID(),
            product,
            price,
            description,
            imgUno:img,
        }
        console.log(UpProduct);
        const url = "http://localhost:4000/productos/";
        PostData(url,UpProduct )
        setTimeout(function(){
            window.location.href = '../index.html'
        }, 1000);


}
