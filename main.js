// //object- data types is curly bracket have key and value(like css)
// var person = {
//     name: "Jigme",
//     gender: "male",
//     age: 17,
//     marry: false,
// }

// console.log(person.age);
// object{} array[];

// //array- list of items
// //get array[] to get object- .

// var todo = ["wake", "eat", "sleep", 'code'];
// // console.log(todo[0]);
// // console.log(todo.length);
// var wallet = {
//     color: "black",
//     size: 20,
//     empty: false,
// }

// var bag = ['laptop', 'book', wallet];
// // console.log(bag[1]);
// // console.log(bag[2].size);

// var classC = ['A', 'B', 'C'];
function showWeather(){
var cityName = document.getElementById("cityName").value;
var api = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&APPID=02d522f701e289110d83898599ed9487';
console.log(api);
$.get(api).done(function(data){
    // console.log(data);
    // console.log(data.name);//Thimphu
    // console.log(data.weather[0].main);//rain
    // console.log(data.main.temp);
    
    $("#container").append(`
    <h3>${data.name}</h3>
    <ul>
        <li>${data.weather[0].main}</li>
        <li>${data.main.temp}</li>
    </ul>`);

})
}
