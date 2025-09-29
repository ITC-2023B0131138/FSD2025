// // const div = document.getElementsByTagName('div');
// // div[0].innerText = "hello world";
// // div[0].style.color ='red';
// // div[0].style.backgroundColor = 'cyan';
// // console.log(div);

// const container = document.getElementsByClassName('container');

// // container[0].innerHTML = '<h2 style=color:red > hello user </h2>';
// // console.dir(container);

// const h2 = document.createElement('h2'); //creating dynamic elements through DOM
// h2.innerText = "ABES Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);



// const button = document.getElementById('btn');
// console.log(button);
// document.getElementById('disp').innerHTML = "<h2> loading...</h2>"

// function msg(){
//     // console.log("hi, im working on DOm");
//     const img =document.createElement('img');
//     img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";

//     img.setAttribute('height','200px');
//     img.setAttribute('width','300px');
//     console.log(img);
//     document.getElementById('disp').innerHTML = "<h2> Welcome to ABES Engineering College </h2>";
//     container[0].appendChild(img);
//     // alert("Hi, I am working on DOM");
// }
// button.addEventListener('click',msg);


const button = document.getElementById("btn");
const disp = document.getElementById("disp");
async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/recipes');
    const jsonData = await response.json();
    var recipe = jsonData.recipes[0];
  let table = `<table border='1'>`;
jsonData.recipes.forEach(Element => {
    table+=`<tr>
    <td>${Element.id}</td>
    <td>${Element.name}</td>
    <td><img src='${Element.image}' alt='${Element.name}' width='100'></td>
    </tr>`;                     
})
table += `</table>`;
disp.innerHTML=table;
}
button.addEventListener('click', fetchData);