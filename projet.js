var text=document.getElementById("text");
var play=document.getElementById("play");
var remove=document.getElementsByClassName("remove")[0];
var div=document.getElementById("res");
play.addEventListener("click",()=>{
      div.innerHTML=text.value;
      localStorage.setItem("result",text.value);
});
remove.onclick= ()=>{
     div.innerHTML="";
    //text.value="";
};
onload=()=>{

    text.innerHTML=localStorage.getItem("result");
    div.innerHTML=text.value;
 };
