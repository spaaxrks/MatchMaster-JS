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
    "11":"python","12":"js","13":"c++","14":"c++",
    "21":"java","22":"html","23":"python","24":"js",
    "31":"swift","32":"html","33":"swift","34":"java"
};
frontimg={
    "11":"./pieces-imges/python.png","12":"./pieces-imges/java-script.png","13":"./pieces-imges/programmer.png","14":"./pieces-imges/programmer.png",
    "21":"./pieces-imges/java.png","22":"./pieces-imges/html.png","23":"./pieces-imges/python.png","24":"./pieces-imges/java-script.png",
    "31":"./pieces-imges/swift.png","32":"./pieces-imges/html.png","33":"./pieces-imges/swift.png","34":"./pieces-imges/java.png"
};
backimg={
    "11":"./favicon_io (2)/frontface.png","12":"./favicon_io (2)/frontface.png","13":"./favicon_io (2)/frontface.png","14":"./favicon_io (2)/frontface.png",
    "21":"./favicon_io (2)/frontface.png","22":"./favicon_io (2)/frontface.png","23":"./favicon_io (2)/frontface.png","24":"./favicon_io (2)/frontface.png",
    "31":"./favicon_io (2)/frontface.png","32":"./favicon_io (2)/frontface.png","33":"./favicon_io (2)/frontface.png","34":"./favicon_io (2)/frontface.png"
}

function putimages(pieces){
    for(let i in pieces){
        const box=document.getElementById(i);

        const front=document.createElement('img');
        front.classList.add("frontface");
        front.src=frontimg[i]
        box.append(front);

        const back=document.createElement('img');
        back.classList.add("backface");
        back.src=backimg[i]
        box.append(back);
        
    }
}
putimages(pieces);


const boxes = document.querySelectorAll(".boxes");
boxes.forEach((box)=>{box.addEventListener("click",flipCard)})

function flipCard(){
    console.log("flipped")
    this.classList.toggle("flipped")            //this adds flipeed along with calss name
    
}