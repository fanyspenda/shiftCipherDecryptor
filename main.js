let str1 = "xultpaajcxitltlxaarpjhtiwtgxktghidhipxciwtvgtpilpitghlxiwiwtxgqadds"
let splitedStr = new Array()
let countedStr = new Array()
let indexFirst = 0
let highestValue = 0
let fixArray = new Array()

splitedStr = letterSplitter(str1)
countedStr = letterCounter(splitedStr)
indexFirst = searchindexOfMax(countedStr)
highestValue = searchMax(countedStr)

console.log(splitedStr)
console.log(countedStr)
console.log("tertinggi adalah: "+highestValue + ", yaitu huruf ke-" + indexFirst)
console.log("total huruf non-kembar yang terpakai: "+letterStrictCounter(countedStr))
console.log("kunci dari cipher text adalah: "+(indexFirst - 4))
console.log("kunci didapat dari index huruf dengan frekuensi tertinggi - index huruf yang sering keluar dalam bahasa inggris (e)")

fixArray = letterToIndex(splitedStr, (indexFirst - 4))
console.log(fixArray)
fixArray = indexToLetter(fixArray)
console.log(fixArray)


// ---WARNING: FUNGSI - FUNGSI DI BAWAH---

//Memisahkan text per huruf dan mereturn array
function letterSplitter(text) {
  let splitText = new Array()
  return splitText = text.split("")
}

// Menghitung jumlah tiap-tiap huruf yang keluar
function letterCounter(text) {
  let letterNumber = new Array()

  //mendefine array
  for (let i = 0; i < 26; i++) {
    letterNumber[i] = 0;
  }

  //menghitung jumlah karakter
  for (let i = 0; i < text.length; i++) {
    if(text[i]=="a"){
      letterNumber[0]=letterNumber[0]+1;
    }
    else if(text[i]=="b"){
      letterNumber[1]=letterNumber[1]+1;
    }
    else if(text[i]=="c"){
      letterNumber[2]=letterNumber[2]+1;
    }
    else if(text[i]=="d"){
      letterNumber[3]=letterNumber[3]+1;
    }
    else if(text[i]=="e"){
      letterNumber[4]=letterNumber[4]+1;
    }
    else if(text[i]=="f"){
      letterNumber[5]=letterNumber[5]+1;
    }
    else if(text[i]=="g"){
      letterNumber[6]=letterNumber[6]+1;
    }
    else if(text[i]=="h"){
      letterNumber[7]=letterNumber[7]+1;
    }
    else if(text[i]=="i"){
      letterNumber[8]=letterNumber[8]+1;
    }
    else if(text[i]=="j"){
      letterNumber[9]=letterNumber[9]+1;
    }
    else if(text[i]=="k"){
      letterNumber[10]=letterNumber[10]+1;
    }
    else if(text[i]=="l"){
      letterNumber[11]=letterNumber[11]+1;
    }
    else if(text[i]=="m"){
      letterNumber[12]=letterNumber[12]+1;
    }
    else if(text[i]=="n"){
      letterNumber[13]=letterNumber[13]+1;
    }
    else if(text[i]=="o"){
      letterNumber[14]=letterNumber[14]+1;
    }
    else if(text[i]=="p"){
      letterNumber[15]=letterNumber[15]+1;
    }
    else if(text[i]=="q"){
      letterNumber[16]=letterNumber[16]+1;
    }
    else if(text[i]=="r"){
      letterNumber[17]=letterNumber[17]+1;
    }
    else if(text[i]=="s"){
      letterNumber[18]=letterNumber[18]+1;
    }
    else if(text[i]=="t"){
      letterNumber[19]=letterNumber[19]+1;
    }
    else if(text[i]=="u"){
      letterNumber[20]=letterNumber[20]+1;
    }
    else if(text[i]=="v"){
      letterNumber[21]=letterNumber[21]+1;
    }
    else if(text[i]=="w"){
      letterNumber[22]=letterNumber[22]+1;
    }
    else if(text[i]=="x"){
      letterNumber[23]=letterNumber[23]+1;
    }
    else if(text[i]=="y"){
      letterNumber[24]=letterNumber[24]+1;
    }
    else if(text[i]=="z"){
      letterNumber[25]=letterNumber[25]+1;
    }
  }
  return letterNumber
}

// Mencari frekuensi huruf tertinggi (yang paling sering muncul)
function searchMax(arrText) {
  let maxValue = 0
  for (let i = 0; i < arrText.length; i++) {
    if(arrText[i]>maxValue){
      maxValue = arrText[i]
    }
  }
  return maxValue
}

// mencari index huruf dengan frekuensi tertinggi
function searchindexOfMax(arrText) {
  let indexOfMax = 0
  let maxValue = 0
  for (let i = 0; i < arrText.length; i++) {
    if(arrText[i]>maxValue){
      indexOfMax = i
      maxValue = arrText[i]
    }
  }
  return indexOfMax
}

// function searchSecond(arrText, maxValue, indexOfMax) {
//   let secondMax = 0
//   for (let i = 0; i < arrText.length; i++) {
//     //apakah nilai array lebih tinggi dari secondMax
//     if(arrText[i]>secondMax){
//       //apakah nilai array lebih kecil/sama dengan nilai max
//       if(arrText[i]<=maxValue){
//         //apakah nilai tersebut adalah nilai max itu sendiri ataukah dari index lain
//         if(i!=indexOfMax){
//           secondMax = arrText[i]
//         }
//       }
//     }
//   }
//   return secondMax
// }

// function searchIndexOfSecond(arrText, maxValue, indexOfMax) {
//   let secondMax = 0
//   let indexOfSecond = 0
//   for (let i = 0; i < arrText.length; i++) {
//     //apakah nilai array lebih tinggi dari secondMax
//     if(arrText[i]>secondMax){
//       //apakah nilai array lebih kecil/sama dengan nilai max
//       if(arrText[i]<=maxValue){
//         //apakah nilai tersebut adalah nilai max itu sendiri ataukah dari index lain
//         if(i!=indexOfMax){
//           secondMax = arrText[i]
//           indexOfSecond = i
//         }
//       }
//     }
//   }
//   return indexOfSecond
// }

// menghitung total huruf yang keluar tanpa ada yang dihitung ulang
function letterStrictCounter(arrCountedText){
  let totalLetterUsed=0
  for (let i = 0; i < arrCountedText.length; i++) {
    if (arrCountedText[i]>0) {
      totalLetterUsed = totalLetterUsed + 1
    }
  }

  return totalLetterUsed
}

// function letterSearcher(index) {
//   let letter
//   if(index==0){
//     letter="a"
//   }
//   else if(index==1){
//     letter="b"
//   }
//   else if(index==2){
//     letter="c"
//   }
//   else if(index==3){
//     letter="d"
//   }
//   else if(index==4){
//     letter="e"
//   }
//   else if(index==5){
//     letter="f"
//   }
//   else if(index==6){
//     letter="g"
//   }
//   else if(index==7){
//     letter="h"
//   }
//   else if(index==8){
//     letter="i"
//   }
//   else if(index==9){
//     letter="j"
//   }
//   else if(index==10){
//     letter="k"
//   }
//   else if(index==11){
//     letter="l"
//   }
//   else if(index==12){
//     letter="m"
//   }
//   else if(index==13){
//     letter="n"
//   }
//   else if(index==14){
//     letter="o"
//   }
//   else if(index==15){
//     letter="p"
//   }
//   else if(index==16){
//     letter="q"
//   }
//   else if(index==17){
//     letter="r"
//   }
//   else if(index==18){
//     letter="s"
//   }
//   else if(index==19){
//     letter="t"
//   }
//   else if(index==20){
//     letter="u"
//   }
//   else if(index==21){
//     letter="v"
//   }
//   else if(index==22){
//     letter="w"
//   }
//   else if(index==23){
//     letter="x"
//   }
//   else if(index==24){
//     letter="y"
//   }
//   else if(index==25){
//     letter="z"
//   }

//   return letter
// }

// mendekripsi perubahan index (array enkripsi harus bergeser berapa)
function decryptor(arrSplittedStr, key) {
  for (let i = 0; i < arrSplittedStr.length; i++) {
    if (arrSplittedStr[i]>0) {
      let newIndex = Math.abs((i-key)%26)
      console.log("huruf ke-"+i+" menjadi huruf ke-"+newIndex)
    }
  }
}

//mengubah nilai array ke angka agar bisa didekripsi
function letterToIndex(arrSplittedStr, key) {
  for (let i = 0; i < arrSplittedStr.length; i++) {
    if(arrSplittedStr[i]=="a"){
      //ditambah 26 untuk menghindari error ketika hasil pengurangan dengan key menjadi negatif
      
      arrSplittedStr[i]=Math.abs((26+0-key)%26)
    }
    else if(arrSplittedStr[i]=="b"){
      arrSplittedStr[i]=Math.abs((26+1-key)%26)
    }
    else if(arrSplittedStr[i]=="c"){
      arrSplittedStr[i]=Math.abs((26+2-key)%26)
    }
    else if(arrSplittedStr[i]=="d"){
      arrSplittedStr[i]=Math.abs((26+3-key)%26)
    }
    else if(arrSplittedStr[i]=="e"){
      arrSplittedStr[i]=Math.abs((26+4-key)%26)
    }
    else if(arrSplittedStr[i]=="f"){
      arrSplittedStr[i]=Math.abs((26+5-key)%26)
    }
    else if(arrSplittedStr[i]=="g"){
      arrSplittedStr[i]=Math.abs((26+6-key)%26)
    }
    else if(arrSplittedStr[i]=="h"){
      arrSplittedStr[i]=Math.abs((26+7-key)%26)
    }
    else if(arrSplittedStr[i]=="i"){
      arrSplittedStr[i]=Math.abs((26+8-key)%26)
    }
    else if(arrSplittedStr[i]=="j"){
      arrSplittedStr[i]=Math.abs((26+9-key)%26)
    }
    else if(arrSplittedStr[i]=="k"){
      arrSplittedStr[i]=Math.abs((26+10-key)%26)
    }
    else if(arrSplittedStr[i]=="l"){
      arrSplittedStr[i]=Math.abs((26+11-key)%26)
    }
    else if(arrSplittedStr[i]=="m"){
      arrSplittedStr[i]=Math.abs((26+12-key)%26)
    }
    else if(arrSplittedStr[i]=="n"){
      arrSplittedStr[i]=Math.abs((26+13-key)%26)
    }
    else if(arrSplittedStr[i]=="o"){
      arrSplittedStr[i]=Math.abs((26+14-key)%26)
    }
    else if(arrSplittedStr[i]=="p"){
      arrSplittedStr[i]=Math.abs((26+15-key)%26)
    }
    else if(arrSplittedStr[i]=="q"){
      arrSplittedStr[i]=Math.abs((26+16-key)%26)
    }
    else if(arrSplittedStr[i]=="r"){
      arrSplittedStr[i]=Math.abs((26+17-key)%26)
    }
    else if(arrSplittedStr[i]=="s"){
      arrSplittedStr[i]=Math.abs((26+18-key)%26)
    }
    else if(arrSplittedStr[i]=="t"){
      arrSplittedStr[i]=Math.abs((26+19-key)%26)
    }
    else if(arrSplittedStr[i]=="u"){
      arrSplittedStr[i]=Math.abs((26+20-key)%26)
    }
    else if(arrSplittedStr[i]=="v"){
      arrSplittedStr[i]=Math.abs((26+21-key)%26)
    }
    else if(arrSplittedStr[i]=="w"){
      arrSplittedStr[i]=Math.abs((26+22-key)%26)
    }
    else if(arrSplittedStr[i]=="x"){
      arrSplittedStr[i]=Math.abs((26+23-key)%26)
    }
    else if(arrSplittedStr[i]=="y"){
      arrSplittedStr[i]=Math.abs((26+24-key)%26)
    }
    else if(arrSplittedStr[i]=="z"){
      arrSplittedStr[i]=Math.abs((26+25-key)%26)
    }
  }
  return arrSplittedStr
}

// mengubah angka pada array yang sudah didekripsi menjadi huruf, agar bisa dibaca
function indexToLetter(arr26Number) {
  for (let i = 0; i < arr26Number.length; i++) {
    if(arr26Number[i]==0){
      arr26Number[i]="a"
    }
    else if(arr26Number[i]==1){
      arr26Number[i]="b"
    }
    else if(arr26Number[i]==2){
      arr26Number[i]="c"
    }
    else if(arr26Number[i]==3){
      arr26Number[i]="d"
    }
    else if(arr26Number[i]==4){
      arr26Number[i]="e"
    }
    else if(arr26Number[i]==5){
      arr26Number[i]="f"
    }
    else if(arr26Number[i]==6){
      arr26Number[i]="g"
    }
    else if(arr26Number[i]==7){
      arr26Number[i]="h"
    }
    else if(arr26Number[i]==8){
      arr26Number[i]="i"
    }
    else if(arr26Number[i]==9){
      arr26Number[i]="j"
    }
    else if(arr26Number[i]==10){
      arr26Number[i]="k"
    }
    else if(arr26Number[i]==11){
      arr26Number[i]="l"
    }
    else if(arr26Number[i]==12){
      arr26Number[i]="m"
    }
    else if(arr26Number[i]==13){
      arr26Number[i]="n"
    }
    else if(arr26Number[i]==14){
      arr26Number[i]="o"
    }
    else if(arr26Number[i]==15){
      arr26Number[i]="p"
    }
    else if(arr26Number[i]==16){
      arr26Number[i]="q"
    }
    else if(arr26Number[i]==17){
      arr26Number[i]="r"
    }
    else if(arr26Number[i]==18){
      arr26Number[i]="s"
    }
    else if(arr26Number[i]==19){
      arr26Number[i]="t"
    }
    else if(arr26Number[i]==20){
      arr26Number[i]="u"
    }
    else if(arr26Number[i]==21){
      arr26Number[i]="v"
    }
    else if(arr26Number[i]==22){
      arr26Number[i]="w"
    }
    else if(arr26Number[i]==23){
      arr26Number[i]="x"
    }
    else if(arr26Number[i]==24){
      arr26Number[i]="y"
    }
    else if(arr26Number[i]==25){
      arr26Number[i]="z"
    }
  }
  return arr26Number
}