let disp = document.getElementById("disp");
let operation = 0;
let string1 = "";
let holderString = "";
let sol = 0;

function one(){
    disp.textContent = disp.textContent + "1";
    string1 += "1";
}

function two(){
    disp.textContent = disp.textContent + "2";
    string1 += "2";
}

function three(){
    disp.textContent = disp.textContent + "3";
    string1 += "3";
}

function four(){
    disp.textContent = disp.textContent + "4";
    string1 += "4";
}

function five(){
    disp.textContent = disp.textContent + "5";
    string1 += "5";
}

function six(){
    disp.textContent = disp.textContent + "6";
    string1 += "6";
}

function seven(){
    disp.textContent = disp.textContent + "7";
    string1 += "7";
}

function eight(){
    disp.textContent = disp.textContent + "8";
    string1 += "8";
}

function nine(){
    disp.textContent = disp.textContent + "9";
    string1 += "9";
}

function zero(){
    disp.textContent = disp.textContent + "0";
    string1 += "0";
}

function dzero(){
    disp.textContent = disp.textContent + "00";
    string1 += "0";
    string1 += "0";
}

function deci(){
    disp.textContent = disp.textContent + ".";
    string1 += ".";
}

function plus(){
    disp.textContent = disp.textContent + "+";
    operation = 1;
    if (sol)
    {
        holderString = sol;
        string1 = "";
        disp.textContent = holderString + "+";
    }
    else
    {
        holderString = string1;
        string1 = "";
    }
}

function minus(){
    disp.textContent = disp.textContent + "-";
    operation = 2;
    if (sol)
    {
        holderString = sol;
        string1 = "";
        disp.textContent = holderString + "-";
    }
    else
    {
        holderString = string1;
        string1 = "";
    }
}

function multiply(){
    disp.textContent = disp.textContent + "*";
    operation = 3;
    if (sol)
    {
        holderString = sol;
        string1 = "";
        disp.textContent = holderString + "*";
    }
    else
    {
        holderString = string1;
        string1 = "";
    }
}

function divide(){
    disp.textContent = disp.textContent + "÷";
    operation = 4;
    if (sol)
    {
        holderString = sol;
        string1 = "";
        disp.textContent = holderString + "÷";
    }
    else
    {
        holderString = string1;
        string1 = "";
    }
}

function clea(){
    disp.textContent = " ";
    string1 = "";
    holderString = "";
    sol = 0;
}

function equal(){
    console.log("1st: " + holderString);
    console.log("2nd: " + string1);
    switch (operation)
    {
        case 1:
            sol = parseFloat(holderString) + parseFloat(string1);
            disp.textContent += "=" + sol;
            break;
        case 2:
            sol = parseFloat(holderString) - parseFloat(string1);
            disp.textContent += "=" + sol;
            break;
        case 3:
            sol = parseFloat(holderString) * parseFloat(string1);
            disp.textContent += "=" + sol;
            break;
        case 4:
            if (parseFloat(string1) == 0)
            {
                disp.textContent = " ";
                disp.textContent = "Error";
            }
            sol = parseFloat(holderString) / parseFloat(string1);
            sol = sol.toFixed(3);
            disp.textContent += "=" + sol;
            break;
    }
    console.log("sol: " + sol);
}