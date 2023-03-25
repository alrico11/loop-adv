/**
 * 
1. terdapat sebuah array seperti berikut:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
0 + 17
1 + 16
2 + 15

2. ada 2 string "hello" dan "world", outputkan huruf yang sama dalam 2 string tersebut
l
0
hint: cara ambil huruf per index
> let huruf = "hello"
> huruf[0]
> h
 */

// SOAL 1
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i=0;i<=arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==17){
            console.log(`${arr[i]} + ${arr[j]}`)
        }
    }
}

//Soal 2
let str1 = "hello",
str2 = "world"
for (let i=0;i<=str1.length;i++){
    for(let j=0;j<str2.length;j++){
        if(str1[i]==str2[j]){
            console.log(`${str1[i]} & ${str2[j]}`)
        }
    }
}
