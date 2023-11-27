
// let b=document.getElementById("but");
// let body=document.getElementById("b");
// let t=document.getElementById("t");


//   b.onclick=change;

//   function change()
//   {

//   let v='012ABCEDF';
//   let c='#';
//   for(let j=1;j<=6;j++)
//   {
//     let g=Math.ceil(Math.random()*8);
//     c=c+v.charAt(g);
//   }
//   console.log(c);
//     body.style.background=c;
// t.hidden=true;
// //   }
// document.querySelector("#grandparent")
// .addEventListener('click',()=>
// {
// console.log("Grand Parent Clicked");
// });//bubbling

// document.querySelector("#parent")
// .addEventListener('click',(e)=>
// {
//   e.stopPropagation();
// console.log("Parent Clicked");
// });//bubbbling

// document.querySelector("#child")
// .addEventListener('click',()=>
// {
// console.log("Child Clicked");
// },true);//capturing
let arr=['a','b','c','d','e'];
arr.object=10;
console.log("for...in Loop")
console.log(arr.length)
for( let value in arr)
{
    console.log(value+"  "+arr[value]);

}
console.log("for...of Loop")

for(let value of arr)
{
    console.log(value+"  "+arr[value]);

}
console.log(arr.length)