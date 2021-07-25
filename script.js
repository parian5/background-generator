var todos = [
"clean room",
"brush teeth",
"exercise",
"study javascript",
"eat healty",
]

/*for (var i=0; i < todos.length; i++){
	console.log(i)
	console.log(todos[i] + "!")
	todos[i] = todos[i] + "!"
}
*/


/*var counterOne = 0;
while (counterOne < 10){
	console.log(counterOne);
	counterOne++
}*/

/*var counterTwo = 10
do {
	console.log(counterTwo)
	counterTwo --;
} while(counterTwo > 0)*/

/*todos.forEach(function(i) {
	console.log(i);
})
*/


function logTodos(todo, i){
	console.log(todo, i)
}

todos.forEach(logTodos);

/*for (most of the time), while, do while, forEach*/