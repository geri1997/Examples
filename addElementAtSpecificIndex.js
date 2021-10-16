//Adds an element at a specific index on an array.
function addElement(arr,index,element){
    arr.push(arr[arr.length-1]);
    //console.log(arr.length)
    var length = arr.length-1;
     while(index< length){
    arr[length-1]= arr[length-2];
    length--;
     }
     arr[index] = element;
   }
   //