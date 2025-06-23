let root=document.querySelector(".root");

function creategrid(){

    for(let i=1;i<=3;i++){
        for(let j=1;j<=4;j++){
    
            let box= document.createElement("div");
            box.classList.add("boxes");
            box.id=`${i}${j}`
    
            root.append(box);
        
        }
    }
    
}
creategrid();



pieces = {
    "11":"python","12":"js","13":"python","14":"c++",
    "21":"js","22":"html","23":"c++","24":"python",
    "31":"html","32":"c++",""
}

function putimages(pieces){

}

