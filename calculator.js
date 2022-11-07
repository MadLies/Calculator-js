function nums(value){
    document.getElementById("result").value += value;
}

function clearResult(){
    document.getElementById("result").value = "";
}

function operation(){
    var oper = document.getElementById("result").value ;
    if (oper == 0){
        document.getElementById("result").value = "0";
    }
    else{
        document.getElementById("result").value = eval(oper);
    }
}

