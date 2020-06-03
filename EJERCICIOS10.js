//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array= [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

let arrayOrd=array.sort()

//[[1,1,1,1], [2,2,2], 4,5,10, [20,20], 391, 392,591]

function ordenar(){
    let duplicatedArray=[]
    let newArray=[]
    let position=0;
    let i=0
    while(i<arrayOrd.length){
        if(arrayOrd[0]=== arrayOrd[1]){
            position= arrayOrd.lastIndexOf(arrayOrd[0])+1;
            duplicatedArray= arrayOrd.splice(0,position)
            newArray.push(duplicatedArray)
        }else{
            newArray.push(arrayOrd[0])
            arrayOrd.shift()
        }
        
    }return newArray
    
}

console.log(ordenar2([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));

// QUESTION 2
// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


function array3(arraySuma, target){
        for(let i=0; i<arraySuma.length;i++){
            for(let j= i+1; j<arraySuma.length;j++)
            if(arraySuma [i] + arraySuma[j]===target){
                return [arraySuma[i], arraySuma[j]]
            }
        }
}

console.log(array3([1,2,3],4))

// QUESTION 3
// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

  console.log(hexToRGB("#15ff"))