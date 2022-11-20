
// Consts
const submit = document.querySelector("form");
const height = document.querySelector("#altura");
const weight = document.querySelector("#peso");
const result = document.querySelector("#resultado");
const spanR = document.querySelectorAll(".result h2 span");
const inputfocus = document.querySelectorAll("input");
const labelwei = document.querySelector(".het");
const labelght = document.querySelector(".alt");
//Final consts



//Functions
height.addEventListener("input", () => {                             //Le o input da altura
  if (height.value > 0) {                                            //Se o valor for maior que 0
    labelght.classList.add("active");                                //Adiciona a classe active
  } else {                                                           //Se não
    labelght.classList.remove("active");                             //Remove a classe active
  }
});
weight.addEventListener("input", () => {                             //Le o input do peso
  if (weight.value > 0) {                                            //Se o valor for maior que 0
    labelwei.classList.add("active");                                //Adiciona a classe active
  } else {                                                           //Se não
    labelwei.classList.remove("active");                             //Remove a classe active
  }
});
//Final functions


//Events
submit.addEventListener("submit", (e) => {
  e.preventDefault();                                                //Previne o comportamento padrão do submit (recarregar a página)
  cm_altura = (height.value / 100).toFixed(2);                       //Converte a altura para metros
  if (height.value == "" || weight.value == "") {                    //Verifica se os campos estão vazios
    alert("Preencha todos os campos!");                              //Alerta caso estejam
  } else {                                                           //Caso não estejam
    if (height.value < 50 || height.value > 250) {                   //Verifica se a altura está entre 50 e 250
      alert("Altura inválida!");                                     //Alerta caso não esteja
    } else {                                                         //Caso esteja
      if (weight.value < 20 || weight.value > 300) {                 //Verifica se o peso está entre 20 e 300
        alert("Peso inválido!");                                     //Alerta caso não esteja
      } else {                                                       //Caso esteja
        imc = weight.value / (cm_altura * cm_altura).toFixed(2);     //Calcula o IMC
        spanR[0].innerHTML = imc.toFixed(2);                         //Mostra o IMC no span

        if (imc < 18.5) {                                            //Verifica se o IMC está abaixo do peso
          result.style.backgroundColor = "#e67e22";                //Muda a cor do resultado
          result.style.color = "#fff";                               //Muda a cor do texto do resultado
          result.innerHTML = "Abaixo do peso";                       //Mostra o resultado
        } else if (imc >= 18.5 && imc < 25) {
          result.style.backgroundColor = "#2ecc71";
          result.style.color = "#fff";
          result.innerHTML = "Peso ideal";
        } else if (imc >= 25 && imc < 30) {
          result.style.backgroundColor = "#e67e22";
          result.style.color = "#fff";
          result.innerHTML = "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
          result.style.backgroundColor = "#e74c3c";
          result.style.color = "#fff";
          result.innerHTML = "Obesidade grau I";
        } else if (imc >= 35 && imc < 40) {
          result.style.backgroundColor = "#e74c3c";
          result.style.color = "#fff";
          result.innerHTML = "Obesidade grau II";
        } else if (imc >= 40) {
          result.style.backgroundColor = "#c0392b";
          result.style.color = "#fff";
          result.innerHTML = "Obesidade grau III";
        }
      }
    }
  }
});
//Final events