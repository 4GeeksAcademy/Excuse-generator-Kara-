/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["mi perro", "mi abuela", "mi vecina", "el sodero", "un pajaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["la tarea", "las llaves", "el auto"];
  let when = [
    "antes de clases",
    "justo a tiempo",
    "cuando terminé",
    "durante el almuerzo",
    "mientras rezaba"
  ];

  function randomElementOfArray(array) {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  }

  let excuse =
    "No puedo porque" +
    " " +
    randomElementOfArray(who) +
    " " +
    randomElementOfArray(action) +
    " " +
    randomElementOfArray(what) +
    " " +
    randomElementOfArray(when);

  document.getElementById("hola").innerHTML = excuse;
};
