let product=document.getElementById("productImg");
let btn =document.getElementsByClassName("btn");

btn[0].onclick=function(){
    productImg.src="t-sh1.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick=function(){
    productImg.src="t-sh2.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick=function(){
    productImg.src="t-sh3.jpg";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}


