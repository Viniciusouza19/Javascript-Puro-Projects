const binari = document.querySelector('#binario');
const decimal = document.querySelector('#decimal');
const octal = document.querySelector('#octal');
const hexadecimal = document.querySelector('#hexadecimal');
const inputs = document.querySelector('.inputs');
const labelbin = document.querySelector('#bin');
const labeldec = document.querySelector('#dec');
const labeloct = document.querySelector('#oct');
const labelhex = document.querySelector('#hex');
                                                                     
function binToBases(value, base) {                                                              // Função que converte o valor binário para as outras bases
    return parseInt(value, 2).toString(base);                                                   // Retorna o valor convertido para a base desejada
}
function ifValueChecked(value) {                                                                // Função que verifica se o input está vazio
    if (value === '') {
        return clean(true);
    } else {
        return clean(false);
    }
    function clean(resp){                                                                       // Tem a função de limpar os campos de texto ou não dependendo do valor de resposta
        switch (resp) {                                                                         // Switch recebe um argumento sem comparação
            case true:                                                                          // Se a resposta for true, limpa todos os campos
                labelbin.classList.remove('active');
                labeldec.classList.remove('active');
                labeloct.classList.remove('active');
                labelhex.classList.remove('active');
                binari.value = '';
                decimal.value = '';
                octal.value = '';
                hexadecimal.value = '';
                break;
            case false:                                                                         // Se a resposta for false, não limpa os campos de texto
                labelbin.classList.add('active');
                labeldec.classList.add('active');
                labeloct.classList.add('active');
                labelhex.classList.add('active');
                break;
        }
    };             
}
inputs.addEventListener('input', (e) => {                                                           // Fica lendo tudo que é digitado nos inputs               
    const input = e.target;                                                                         // Pega a tag input que foi digitada
    const value = input.value;                                                                      // Pega o valor da tag input
    const id = input.id;                                                                            // Pega o id da tag input ex: #binario, #decimal, #octal, #hexadecimal

    if (id == 'binario') {      
        const bases = {'decimal': 10, 'octal': 8, 'hexadecimal': 16};                                // Cria um objeto com as bases que serão convertidas'}                                                                                                                           
        for (let base in bases) {                                       
            document.querySelector(`#${base}`).value = binToBases(value, bases[base]).toUpperCase();                  // Converte o valor binário para as outras bases                                         
        }
        ifValueChecked(value); 
    } else if (id == 'decimal') {                                                                   // Se o id do input for decimal ele executa o código abaixo
        decimal.value = value;
        const bases = {'binario': 2, 'octal': 8, 'hexadecimal': 16};                                // Cria um objeto com as bases que serão convertidas
        for(let base in bases) {
            document.querySelector(`#${base}`).value = parseInt(value, 10).toString(bases[base]).toUpperCase();        // Converte o valor decimal para as outras bases
        }
        ifValueChecked(value);
        
    } else if (id == 'octal') {                                                                     // Se o id do input for octal ele executa o código abaixo
        octal.value = value;
        const bases = {'binario': 2, 'decimal': 10, 'hexadecimal': 16};                             // Cria um objeto com as bases que serão convertidas
        for(let base in bases) {
            document.querySelector(`#${base}`).value = parseInt(value, 8).toString(bases[base]).toUpperCase();         // Converte o valor octal para as outras bases
        }
        ifValueChecked(value);
    }else if (id == 'hexadecimal') {                                                                // Se o id do input for hexadecimal ele executa o código abaixo
        hexadecimal.value = value.toUpperCase();
        const bases = {'binario': 2, 'decimal': 10, 'octal': 8};                                    // Cria um objeto com as bases que serão convertidas
        for(let base in bases) {
            document.querySelector(`#${base}`).value = parseInt(value, 16).toString(bases[base]).toUpperCase();        // Converte o valor hexadecimal para as outras bases
        }
        ifValueChecked(value);
    }                                                                                               // Fim dos if's
});                                                                                                 // Fim do addEventListener
// Fim do código

// Acima temos o jeito facil para converter as bases

// Abaixo temos o jeito dificil para converter as bases
// Da para ser refatorado, mas não vou fazer isso agora porque estou com preguiça
// Tem muitas formas de fazer isso, mas eu fiz da forma que eu entendi


// inputs.addEventListener("input", (e) => {
//   const input = e.target;
//   const value = input.value;
//   const id = input.id;
//   const label = document.querySelector(`label[for=${id}]`);
//   if (value == "") {
//     label.classList.remove("active");
//   } else {
//     label.classList.add("active");
//   }
//   if (id == "binario") {
//     valueSplit = value.toUpperCase().split("");
//     valueRev = valueSplit.reverse();
//     let dec = 0;
//     for (let i = 0; i < valueRev.length; i++) {
//       dec += valueRev[i] * 2 ** i;
//     }

//     let decToHexa = dec;
//     let hexa = "";
//     while (decToHexa > 0) {
//       let resto = decToHexa % 16;
//       if (resto == 10) {
//         resto = "A";
//       } else if (resto == 11) {
//         resto = "B";
//       } else if (resto == 12) {
//         resto = "C";
//       } else if (resto == 13) {
//         resto = "D";
//       } else if (resto == 14) {
//         resto = "E";
//       } else if (resto == 15) {
//         resto = "F";
//       }
//       hexa = resto + hexa;
//       decToHexa = Math.floor(decToHexa / 16);
//       console.log(resto);
//     }

//     let binToctal = dec;
//     let oct = "";
//     while (binToctal > 0) {
//       let resto = binToctal % 8;
//       oct = resto + oct;
//       binToctal = Math.floor(binToctal / 8);
//     }

//     labeldec.classList.add("active");
//     decimal.value = dec;
//     labeloct.classList.add("active");
//     octal.value = oct;
//     labelhex.classList.add("active");
//     hexadecimal.value = hexa;
//     if (value == "") {
//       labeldec.classList.remove("active");
//       decimal.value = "";
//       labeloct.classList.remove("active");
//       octal.value = "";
//       labelhex.classList.remove("active");
//       hexadecimal.value = "";
//     }
//   } else if (id == "decimal") {
//     let dec = value;
//     let decToHexa = dec;
//     let hexa = "";
//     while (decToHexa > 0) {
//       let resto = decToHexa % 16;
//       if (resto == 10) {
//         resto = "A";
//       } else if (resto == 11) {
//         resto = "B";
//       } else if (resto == 12) {
//         resto = "C";
//       } else if (resto == 13) {
//         resto = "D";
//       } else if (resto == 14) {
//         resto = "E";
//       } else if (resto == 15) {
//         resto = "F";
//       }
//       hexa = resto + hexa;
//       decToHexa = Math.floor(decToHexa / 16);
//       console.log(resto);
//     }

//     let binToctal = dec;
//     let oct = "";
//     while (binToctal > 0) {
//       let resto = binToctal % 8;
//       oct = resto + oct;
//       binToctal = Math.floor(binToctal / 8);
//     }

//     let decToBin = dec;
//     let bin = "";
//     while (decToBin > 0) {
//       let resto = decToBin % 2;
//       bin = resto + bin;
//       decToBin = Math.floor(decToBin / 2);
//     }

//     labelbin.classList.add("active");
//     binari.value = bin;
//     labeloct.classList.add("active");
//     octal.value = oct;
//     labelhex.classList.add("active");
//     hexadecimal.value = hexa;
//     if (value == "") {
//       labelbin.classList.remove("active");
//       binari.value = "";
//       labeloct.classList.remove("active");
//       octal.value = "";
//       labelhex.classList.remove("active");
//       hexadecimal.value = "";
//     }
//   } else if (id == "octal") {
//     //Quando o input é octal
//     let oct = value;
//     let octSplit = oct.split("");
//     let octRev = octSplit.reverse();
//     let octValid = [];

//     for (let i = 0; i < octRev.length; i++) {
//       if (octRev[i] <= 7) {
//         octValid.push(octRev[i]);
//       }
//     }
//     let bin = "";
//     for (let i = 0; i < octValid.length; i++) {
//       if (octValid[i] == 0) {
//         bin = "000" + bin;
//       } else if (octValid[i] == 1) {
//         bin = "001" + bin;
//       } else if (octValid[i] == 2) {
//         bin = "010" + bin;
//       } else if (octValid[i] == 3) {
//         bin = "011" + bin;
//       } else if (octValid[i] == 4) {
//         bin = "100" + bin;
//       } else if (octValid[i] == 5) {
//         bin = "101" + bin;
//       } else if (octValid[i] == 6) {
//         bin = "110" + bin;
//       } else if (octValid[i] == 7) {
//         bin = "111" + bin;
//       }
//     }

//     let binToDec = bin.split("");
//     let binRev = binToDec.reverse();
//     let dec = 0;
//     for (let i = 0; i < binRev.length; i++) {
//       dec += binRev[i] * 2 ** i;
//     }

//     let decToHexa = dec;
//     let hexa = "";
//     while (decToHexa > 0) {
//       let resto = decToHexa % 16;
//       if (resto == 10) {
//         resto = "A";
//       } else if (resto == 11) {
//         resto = "B";
//       } else if (resto == 12) {
//         resto = "C";
//       } else if (resto == 13) {
//         resto = "D";
//       } else if (resto == 14) {
//         resto = "E";
//       } else if (resto == 15) {
//         resto = "F";
//       }
//       hexa = resto + hexa;
//       decToHexa = Math.floor(decToHexa / 16);
//     }

//     labelbin.classList.add("active");
//     binari.value = bin;
//     labeldec.classList.add("active");
//     decimal.value = dec;
//     labelhex.classList.add("active");
//     hexadecimal.value = hexa;
//     if (value == "") {
//       labelbin.classList.remove("active");
//       binari.value = "";
//       labeldec.classList.remove("active");
//       decimal.value = "";
//       labelhex.classList.remove("active");
//       hexadecimal.value = "";
//     }
//   } else if (id == "hexadecimal") {
//     //Quando o input é hexadecimal
//     let hex = value;
//     let hexSplit = hex.toUpperCase().split("");
//     for (let i = 0; i < hexSplit.length; i++) {
//       if (hexSplit[i] == "A") {
//         hexSplit[i] = 10;
//       } else if (hexSplit[i] == "B") {
//         hexSplit[i] = 11;
//       } else if (hexSplit[i] == "C") {
//         hexSplit[i] = 12;
//       } else if (hexSplit[i] == "D") {
//         hexSplit[i] = 13;
//       } else if (hexSplit[i] == "E") {
//         hexSplit[i] = 14;
//       } else if (hexSplit[i] == "F") {
//         hexSplit[i] = 15;
//       }
//     }
//     let hexRev = hexSplit.reverse();
//     let bin = "";
//     for (let i = 0; i < hexRev.length; i++) {
//       if (hexRev[i] == 0) {
//         bin = "0000" + bin;
//       } else if (hexRev[i] == 1) {
//         bin = "0001" + bin;
//       } else if (hexRev[i] == 2) {
//         bin = "0010" + bin;
//       } else if (hexRev[i] == 3) {
//         bin = "0011" + bin;
//       } else if (hexRev[i] == 4) {
//         bin = "0100" + bin;
//       } else if (hexRev[i] == 5) {
//         bin = "0101" + bin;
//       } else if (hexRev[i] == 6) {
//         bin = "0110" + bin;
//       } else if (hexRev[i] == 7) {
//         bin = "0111" + bin;
//       } else if (hexRev[i] == 8) {
//         bin = "1000" + bin;
//       } else if (hexRev[i] == 9) {
//         bin = "1001" + bin;
//       } else if (hexRev[i] == 10) {
//         bin = "1010" + bin;
//       } else if (hexRev[i] == 11) {
//         bin = "1011" + bin;
//       } else if (hexRev[i] == 12) {
//         bin = "1100" + bin;
//       } else if (hexRev[i] == 13) {
//         bin = "1101" + bin;
//       } else if (hexRev[i] == 14) {
//         bin = "1110" + bin;
//       } else if (hexRev[i] == 15) {
//         bin = "1111" + bin;
//       }
//     }

//     let binToDec = bin.split("");
//     let binRev = binToDec.reverse();
//     let dec = 0;
//     for (let i = 0; i < binRev.length; i++) {
//       dec += binRev[i] * 2 ** i;
//     }

//     let decToOct = dec;
//     let oct = "";
//     while (decToOct > 0) {
//       let resto = decToOct % 8;
//       oct = resto + oct;
//       decToOct = Math.floor(decToOct / 8);
//     }

//     labelbin.classList.add("active");
//     binari.value = bin;
//     labeldec.classList.add("active");
//     decimal.value = dec;
//     labeloct.classList.add("active");
//     octal.value = oct;
//     if (value == "") {
//       labelbin.classList.remove("active");
//       binari.value = "";
//       labeldec.classList.remove("active");
//       decimal.value = "";
//       labeloct.classList.remove("active");
//       octal.value = "";
//     }
//   }
// }); //Fim do addEventListener
