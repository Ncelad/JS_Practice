task_1()
task_2()
task_3()
task_4()
task_5()
task_6()
task_7()

function task_1(){
    let name = prompt("Your name:");
    alert("Hi," + name + "!");
}

function task_2(){
    const current_year = 2021;
    let birth = prompt("Birth year:");
    alert("You are " + eval(current_year - birth) + " years old.");
}

function task_3(){
    let edge = prompt("Edge of square:");
    alert("Perimeter of square is " + eval(edge * 4) + ".");
}

function task_4(){
    const pi = 3.14;
    let radius = prompt("Radius of circle:");
    alert("Area of circle is " + eval(pi * (radius*radius)) + ".");
}

function task_5(){
    let distance = prompt("Distance:");
    let time = prompt("Time:");
    alert("Speed: " + eval(distance/time) + " km/h.");
}

function task_6(){
    const eur_koeficient = 0.8462;
    let dollars = prompt("Dollars:");
    alert("Euros: " + eval(dollars*eur_koeficient) + ".");
}

function task_7(){
    const file_size = 820;
    let gigabytes = prompt("Gigabytes:");
    alert("There are can be: " + eval((gigabytes*1024)/file_size) + " files with size of " + file_size + " MB.");
}
