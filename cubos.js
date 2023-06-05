const renda = 3000
const meses = 12

if(renda > 2000){
    const pagar = renda * 18/100
    const valorTotal = pagar * meses
    console.log(`o estudante devera pagar R$ ${valorTotal}`)

    }else if(meses > 60){
        console.log("a divida do estudante foi quitada")

    }else if(renda <= 2000){
        console.log("o estudante não ira pagar nada este mes")

    }
        

    