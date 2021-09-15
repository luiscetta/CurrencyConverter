// dolar > real 
function ConverteDolarToReal() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
  
    let valorEmReal = Number((valorEmDolarNumerico * 5.24).toFixed(2));
    console.log(valorEmReal);
  
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado em BRL é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  };

// real > dolar 

function ConverteRealToDolar() {
  let elementValue = document.getElementById("valor");
  let values = elementValue.value;
  let valueInReal = parseFloat(values);

  let valueInDolar = Number((valueInReal / 5.24).toFixed(2));
  console.log(valueInDolar);

  let convertedElementValue = document.getElementById("valorConvertido");
  let convertedValue = "O resultado em USD é US$ " + valueInDolar;
  convertedElementValue.innerHTML = convertedValue;
}