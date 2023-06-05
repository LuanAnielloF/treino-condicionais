const idade = 17
const doença = true
const altura = 1.50

if(altura < 1.50 || doença === true || idade < 12 || idade > 65){
    console.log("ACESSO NEGADO")

    }else if(idade < 18){
        console.log("você deve pagar 10 reais")

    }else if(idade >= 18){
       console.log("você deve pagar 20 reais") 

    }