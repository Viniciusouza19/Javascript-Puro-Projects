const teclado = document.querySelector('.teclado');                                                                                 // Seleciona o teclado
const display__operacao = document.querySelector('.display__operacao');                                                             // Display da operação
const display__resultado = document.querySelector('.display__resultado');                                                           // Função para criar os botões

clickParent = true;

teclado.addEventListener('click', (event) => {                                                                                      // Evento de click no teclado
    const elemento = event.target;                                                                                                  // Elemento que foi clicado
    const elemento__valor = elemento.innerText;                                                                                     // Valor do elemento clicado
    const elemento__classe = elemento.classList[0];                                                                                 // Classe do elemento que foi clicado
    const elemento__classe__operacao = elemento.classList[1];                
    if (elemento__classe === 'teclado__botao' || elemento.classList[0] == 'backspace' || elemento.classList[0] == 'bckp' ) {        // Se o elemento clicado for um botão
        if (elemento__classe__operacao === 'teclado__botao__operacao') {                                                            // Se o elemento clicado for um botão de operação
            display__operacao.innerText += elemento__valor;                                                                         // Adiciona o valor do elemento clicado no display da operação
        }else if(elemento.innerText === 'AC'){                                                                                      // Se o elemento clicado for o botão AC
            display__resultado.innerText = '';                                                                                      // Limpa o display do resultado
            display__operacao.innerText = '';                                                                                       // Limpa o display da operação
        }else if(elemento.innerText === '='){                                                                                       // Se o elemento clicado for o botão =
            display__resultado.innerText = eval(display__operacao.innerText);                                                       // Calcula o resultado da operação
        }else if(elemento.innerText === '(...)'){                                                                                   // Se o elemento clicado for o botão (...)
            if(clickParent == true){                                                                                                // Se o click for no botão (...) pela primeira vez
            display__operacao.innerText += '(';                                                                                     // Adiciona o valor do elemento clicado no display da operação
            clickParent = false;                                                                                                    // Muda o valor da variável para false
            } else if(clickParent == false){                                                                                        // Se o click for no botão (...) pela segunda vez
            display__operacao.innerText += ')';                                                                                     // Adiciona o valor do elemento clicado no display da operação
            clickParent = true;                                                                                                     // Muda o valor da variável para true
            }
        }else if(elemento.classList[0] == 'backspace'|| elemento.classList[0] == 'bckp'){                                           // Se o elemento clicado for o botão backspace ou bckp
            display__operacao.innerText = display__operacao.innerText.slice(0, -1);                                                 // Remove o último caractere do display da operação
            if(display__operacao.innerText.includes('(') == true){
                clickParent = false;
            } else if(display__operacao.innerText.includes('(') == false){
                clickParent = true;
            }                                                                                                             
        }                                           
        else{                                                                                                                       // Se o elemento clicado for um botão de número
            display__operacao.innerText += elemento__valor;                                                                         // Adiciona o valor do elemento clicado no display da operação
        }
         
    }
});
