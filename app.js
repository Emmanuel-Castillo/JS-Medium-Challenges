//falsy or truthy: return falsy
function falsyOrTruthy(elem1, elem2){
  return !elem1 ? elem1 : elem2
}

console.log(falsyOrTruthy(0,5))

//return length of any array
function arrayLength(arr){
  return arr.length
}

console.log(arrayLength([1,2,3,4]))

//get last array element
function lastElement(arr){
  return arr[arr.length - 1]
}

console.log(lastElement([1,2,3,4]))

//find sum of array
function arrSum(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }

  return sum
}

console.log(arrSum([1,2,3,4,5]))

//add up numbers from a single number
function progressiveSum(num){
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}

console.log(progressiveSum(10))

//calculate time in mm:ss
function calcTime(seconds){
  let min = Math.floor(seconds / 60)
  let sec = seconds % 60

  if (min.toString().length === 1)
    min = '0' + min

  return min + ":" + sec
}

console.log(calcTime(10))

//find largest number in array
function getMax(arr){
  let min = arr[0]
  for(let i = 1; i < arr.length; i++){
    if (arr[i] > min)
      min = arr[i]
  }
  return min
  
}

console.log(getMax([100,200,400,-100,200]))

//reverse string
function reverseString(str){
  return str.split('').reverse().join('')
}

console.log(reverseString("mayday"))

//turn every element in array to 0
function convertToZeros(arr){
  // return new Array(arr.length).fill(0)

  //callback has invisible return
  return arr.map(elem => 0)
}

console.log(convertToZeros([1,2,3,4,5,6,7]))

//filter out all apples
function removeApples(arr){
  return arr.filter(elem => elem !== 'apple')
}

console.log(removeApples(['orange','banana','apple','orange','apple','banana']))

//filter out falsy values
function removeFalsy(arr){
  return arr.filter(elem => !!elem === true)
}

console.log(removeFalsy([1,2,0,null,undefined,'asd','',true,999]))

//truthy to true, falsy to true
function convertToBoolean(arr){
  return arr.map(elem => (!!elem === true ? true : false))
}

console.log(convertToBoolean([1,2,3,0,undefined,null,'','as',NaN,999,-1,2,3]))