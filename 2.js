// project euler problem 2 - Cameron Lakenen
var f = 0, result = 0, current = 1,
	start = new Date().getTime(),
	proc = typeof process != 'undefined' ? process : false,
	argv2 = parseInt(proc && proc.argv[2], 10),
	limit = isNaN(argv2) ? 4000000 : argv2;

function fibR(n) {
	if (n === 1) return 2;
	if (n === 0) return 1;
	return fibR(n - 1) + fibR(n - 2);
}

var fibs = [1, 2];
function fibI(n) {
	var i = 2;
	if (n === 1) return 2;
	if (n === 0) return 1;
	while (i <= n) {
		fibs[i] = fibs[i - 1] + fibs[i - 2];
		i++;
	}
	return fibs[n];
}

while (current < limit) {
	result += current % 2 === 0 ? current : 0;
	current = fibI(f++);
}

console.log("The sum of even fibs up to " + limit + " is " + result +
	" (solution took " + ((new Date().getTime() - start)/1000).toFixed(3) + " seconds)");
