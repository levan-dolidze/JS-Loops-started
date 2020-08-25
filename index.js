
// var numbersArray=[10,15,20,25,30];
// consol.log(numbersArray[0]);
// consol.log(numbersArray[6]);

// for (var i = 0; i < 5; i++) {
   
//     console.log("hello");
//     console.log("index is,",i);
// }

//აგდავუყვებით არეისს და ვლოგავთ წაყმა
// for (var index = 0; index < numbersArray.length; index++) {
//     console.log(numbersArray[index]);
    
// }

// for (var index = numbersArray.length-1; index >= 0; index--) {
//     console.log(numbersArray[index]);
    
// }


var obj1={
    name:"sofia",
    grade:85
}
var obj2={
    name:"ani",
    grade:95
}

var array=[obj1,obj2];

function logUsersGrades(array)
{
    
    for(var i=0;i<array.length;i++){
       if(array[i].grade>=90&& array[i].grade<=100){
        console.log(array.name+"a")
       };
       if(array[i].grade<90&& array[i].grade>=80){
        console.log(array.name+"b")
       };
       if(array[i].grade>70&& array[i].grade<=79){
        console.log(array.name+"c")
       };
       
       
        
    };

    
};
logUsersGrades(array);




       
 

