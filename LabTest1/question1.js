
const mixedArray = ['PIZZA',10,true,25,false,'Wings']
let promise = new Promise((resolve, reject) => {
    let newArray =[]
    var letters = /^[A-Za-z]+$/;
    for(let i=0; i< mixedArray.length; i++){
        if(mixedArray[i].match(letters)){
            newArray = mixedArray[i].toLowerCase();
            return newArray;}
        else{
            reject('Error');
        }
    }
});