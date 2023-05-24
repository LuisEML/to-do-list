const expresiones = {
    // /^[a-zA-ZÀ-ÿ\s]{4,40}$/
	nombre: /^[a-zA-ZÁ-ÿ-Z0-9\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
}

let escuchar = document.querySelector(".escuchar");
let submit = document.querySelector(".submit");

let nuevo_datos = document.querySelector(".list");

  
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(escuchar.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = escuchar.value;
        nuevo_datos.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times" 
        li.appendChild(span)
        escuchar.value = '';  
        guardarLocal();
      
    }else{
        document.querySelector(".valid_error").classList.add("input-error-activo");
    }
})     

escuchar.addEventListener("keyup",(e)=>{
    if(expresiones.nombre.test(e.target.value)){
        document.querySelector(".valid_error").classList.remove("input-error-activo");
        if(e.code === "Enter"){
            let li = document.createElement("li");
            li.innerHTML = escuchar.value;
            nuevo_datos.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "&times" 
            li.appendChild(span)
            escuchar.value = '';  
            guardarLocal();
        }
    }else{
        document.querySelector(".valid_error").classList.add("input-error-activo");
    }
})

nuevo_datos.addEventListener("click",function(e){
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        guardarLocal();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        guardarLocal();

    }
},false)

function guardarLocal(){
    localStorage.setItem("data",nuevo_datos.innerHTML);
}

function mostrarDatos(){
    nuevo_datos.innerHTML = localStorage.getItem("data");
}

mostrarDatos();

   
   




