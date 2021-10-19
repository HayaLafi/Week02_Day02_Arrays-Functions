
let arry0ne =[1,3,5,7,9,11]
let arraytow= [10,2.4,6,8,];
let keynum=5
let keytow=10;
let sumnum;


function findMatch (aArray ,key){

    for(let i =0;i<aArray.length;i++){

for(let j =i+1;j<aArray.length-1;j++){ 
    sumnum  = aArray[i]+aArray[j]

if (sumnum == key){

console.log(aArray[i]+",and"+aArray[j] +"="+key)

}
}}}
findMatch([1,2,3,4,5],6)