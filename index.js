
let b=document.getElementById("but");
let body=document.getElementById("b");


  b.onclick=change;

  function change()
  {

  let v='012ABCEDF';
  let c='#';
  for(let j=1;j<=6;j++)
  {
    let g=Math.ceil(Math.random()*8);
    c=c+v.charAt(g);
  }
  console.log(c);
    body.style.background=c;
    console.log(i);

  }

