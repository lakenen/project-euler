// project euler problem 3 - Cameron Lakenen

var start = new Date().getTime(),
	proc = typeof process != 'undefined' ? process : false,
	argv2 = parseInt(proc && proc.argv[2], 10),
	limit = isNaN(argv2) ? 4000000 : argv2;


console.log("The sum of even fibs up to " + limit + " is " + result +
	" (solution took " + ((new Date().getTime() - start)/1000).toFixed(3) + " seconds)");
