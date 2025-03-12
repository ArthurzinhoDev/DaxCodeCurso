n1 = 2.2
n2= 2.5
n3= 8
mens1= "!!VOCE FOI APROVADO!!"
mens2="VOCE REPROVOU:("
mens3="RECUPERAÇÃO"
let med = (n1+n2+n3)/3

console.log(`Sua média foi de ${med.toFixed(1)}`)
console.log((med<5 && mens2) || (med>4 || med<8 && mens3) || (med>=7 && mens1))