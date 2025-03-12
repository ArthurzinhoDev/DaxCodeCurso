let user = prompt("Qual seu acesso?")
let senha= prompt("Qual sua senha?")

acesso= "acesso liberado"
acesso2="acesso negado"

console.log((user=="admin" || user=="moderador" && senha==12345) && acesso || acesso2)

