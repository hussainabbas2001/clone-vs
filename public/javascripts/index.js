

function reload (){
    reload = location.reload();
}




function file (none){
    document.querySelector("#file").style.display = none;
}

function folder (display){
    document.querySelector("#folder").style.display = display;
}

const reloadbtn = document.querySelector("#reload").addEventListener("click", reload, false);

document.querySelector("#fileIcon").addEventListener("click", function(){
    file("block")
    folder("none")
    document.querySelector("#file").focus();

})

document.querySelector("#foldericon").addEventListener("click", function(){
    folder("block")
   file("none")
   document.querySelector("#folder").focus();

})

document.querySelector("#file").addEventListener("keypress", function(dets){
        if(dets.keyCode === 96){
    file("none")
    document.querySelector("#file").value = "";

    }
    else{
    file("block")
    }
})



document.querySelector("#folder").addEventListener("keypress", function(dets){
    if(dets.keyCode === 96){
folder("none")
document.querySelector("#folder").value = "";

}
else{
folder("block")
}
})


document.querySelector("#cross").addEventListener("click", () =>{
    document.querySelector(".leaves").style.display = "none"
    document.querySelector("textarea").style.display = "none"
    document.querySelector('button').style.display = "none"
    document.querySelector("#Nofiles").style.display = "initial"
})

