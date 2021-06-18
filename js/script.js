console.log("Netflix Clone");

function disp(id){
    // document.getElementById(id).style.display = "block";

    if( document.getElementById(id).style.display ==="block"){
        document.getElementById(id).style.display = "none";
    }
    else{
        document.getElementById(id).style.display = "block";
    }

    // console.log(document.getElementById(".answer").style.display);
    // if(document.querySelector(".answer").style.fontSize)
}

function rotate(id) {

    var span = document.getElementById(id);
    // span.className = "rotate";

    if(!span.classList.contains("rotate")){

        span.classList.add("rotate")
        // console.log("add");
    }
    else{
        // console.log("remove");
        span.classList.remove("rotate");
    }
}

