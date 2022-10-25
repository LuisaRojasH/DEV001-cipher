const cipher = {
  encode: function (desplazamiento, mensaje) {
    //TypeError solo numeros para el desplazamiento y solo letras para el mensaje
   if(typeof desplazamiento != "number" || desplazamiento === 0){
    throw new TypeError("solo numeros")
  } 
   if(typeof mensaje !== "string"){
    throw new TypeError("solo letras")
  } 
  //declarar variable string donde guardar el resultado de la funcion
    let string = ""
  //ciclo for para recorrer el mensaje y obtener el numero correspondiente del codigo Ascii
    for (let index = 0; index < mensaje.length; index++) {
          let charA = mensaje[index].charCodeAt();
          if(charA >= 65 && charA <= 90){ //si el codigo ascii esta entre 65 y 90 aplicar la ecuacion
            let cesar = (parseInt(charA) - 65 + desplazamiento)%26 + 65
            let desdeCodA = String.fromCharCode(cesar) //cambiar los nuevos numeros ascii a caracteres
            string += desdeCodA
          }
          else
           string += mensaje[index] //si no esta entre 65 y 90 se deja igual al mensaje original       
     } 
     return string 
    },

  decode: function (desplazamiento, mensaje) {
    if(typeof desplazamiento !== "number" || desplazamiento === 0){
      throw new TypeError("solo numeros")
    } 
    if(typeof mensaje !== "string"){
      throw new TypeError("solo letras")
    } 
    let string2 = ""
    for (let i = 0; i<mensaje.length; i++) {
          let ascii = mensaje[i].charCodeAt()
          if(ascii >= 65 && ascii <= 90){
            let cesar = (parseInt(ascii)+ 65 - desplazamiento)%26 + 65
            let desdeAscii = String.fromCharCode(cesar)
            string2 += desdeAscii
          }
          else string2 += mensaje[i]
    } 
    return string2
  }
}
export default cipher;