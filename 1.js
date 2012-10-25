// project euler problem 1 - Cameron Lakenen

var i = 3, s = 0,
	start = new Date().getTime(),
	proc = typeof process != 'undefined' ? process : false,
	limit = parseInt(proc && proc.argv[2], 10) || 1000;

while (i < limit) {
	s += i % 3 === 0 || i % 5 === 0 ? i : 0;
	i++;
}

console.log("The sum of multiples of 3 and 5 under " + limit + " is " + s +
	" (solution took " + ((new Date().getTime() - start)/1000).toFixed(3) + " seconds)");

