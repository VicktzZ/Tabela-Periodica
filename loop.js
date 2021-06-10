import tablep from "/tableapi.js"

const tabela = document.querySelector("section")
const coluna = 18
const linha = 9

//*TABELA*/ 

let arr = [ [0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 17],
            [0, 1, '', '', '', '', '', '', '', '', '', '', 12, 13, 14, 15, 16, 17],
            [0, 1, '', '', '', '', '', '', '', '', '', '', 12, 13, 14, 15, 16, 17],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [0, 1, '', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [0, 1, '', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            ['', '', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, ''],
            ['', '', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, '']
                                                                                ]
                                                                                
//*CORES, NÚMEROS ATÔMICOS E ELEMENTOS*/ 

let contador = 0
const table = tablep()

for (let i = 0; i < linha; i++) {
    for (let j = 0; j < coluna; j++) {
        const element = document.createElement("div")
        element.setAttribute("class", "elemento")
        element.setAttribute("alt", "elemnto")


        const simbolo = document.createElement("div")
        simbolo.setAttribute("class", "simbolo")

        const data = document.createElement("div")
        data.setAttribute("class", "data")

        if (i !== arr[i] && j !== arr[i][j]) {
            element.setAttribute("class", "empty-cell")
        } else {
            data.textContent = table[contador].atomicNumber
            simbolo.textContent = table[contador].symbol
            
            //* Correção de Cores
            
            if(table[contador].groupBlock === 'hidrogenio') {
                element.style.backgroundColor = "greenyellow"
            }
            
            
            if(table[contador].groupBlock === 'alkali metal') {
                element.style.backgroundColor = "yellow"
            }
            
            if(table[contador].groupBlock === 'lanthanoid') {
                element.style.backgroundColor = "lightgray"
            }
            
            if(table[contador].groupBlock === 'transition metal') {
                element.style.backgroundColor = "orange"
            }
            
            if(table[contador].groupBlock === 'alkaline earth metal') {
                element.style.backgroundColor = "#82abf7"
            }
            
            if(table[contador].groupBlock === 'post-transition metal' || table[contador].groupBlock === 'metal') {
                element.style.backgroundColor = "#4a3aff"
            }
            

            if(table[contador].groupBlock === 'metalloid') {
                element.style.backgroundColor = "#eee56d"
            }
            

            if(table[contador].groupBlock === 'nonmetal') {
                element.style.backgroundColor = "#ebebeb"
            }
            

            if(table[contador].groupBlock === 'halogen') {
                element.style.backgroundColor = "salmon"
            }
            
            
            if(table[contador].groupBlock === 'noble gas') {
                element.style.backgroundColor = "crimson"
            }
            
            if(table[contador].groupBlock === 'actinoid') {
                element.style.backgroundColor = "gray"
            }

            contador ++

        }
        
        //* Incremento de elementos 

        tabela.appendChild(element)
        element.appendChild(data)
        element.appendChild(simbolo)

    }
}