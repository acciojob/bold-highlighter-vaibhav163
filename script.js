const link=document.getElementById("link");
  const str=document.querySelectorAll("strong");
  function highlight(){
    str.forEach(el=>{
    el.style.color='rgb(0, 128, 0)';
  });
  }
  function return_normal(){
    str.forEach(el=>{
    el.style.color="rgb(0, 0, 0)";
  });
  }
