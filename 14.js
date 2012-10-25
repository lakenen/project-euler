// project euler problem 14 - Cameron Lakenen

var counts = {},
	state = {max: 0},
	current,
	i,
	start = new Date().getTime(),
	proc = typeof process != 'undefined' ? process : false,
	limit = parseInt(proc && proc.argv[2], 10) || 1000000;

// your standard max-finder loop...
for (i = 2; i <= limit; ++i) {
	current = countFast(i);
	if (state.max < current) {
		state = {
			max: current,
			i: i
		};
	}
}

console.log("The longest sequence with starting number under " + limit +
	" begins at " + state.i + " and is " + state.max + " in length" +
	" (solution took " + ((new Date().getTime() - start)/1000).toFixed(3) + " seconds)");


// initial approach... slow brute-force style
function countSlow(n) {
	var c = 1;
	while (n > 1) {
		// compute next n
		n = n%2 === 0 ? n / 2 : n = 3*n + 1;
		c++;
	}
	return c;
}

// better approach, using memoization to avoid re-computing sequences
function countFast(n) {
	var c = 1,
		_n = n; // store the original n so we can save the result
	while (n > 1) {
		// compute next n
		n = n%2 === 0 ? n / 2 : n = 3*n + 1;
		// have we already checked this number?
		if (counts[n]) {
			c += counts[n];
			break;
		}
		c++;
	}
	// save it for later!
	counts[_n] = c;
	return c;
}


// other thoughts

// I inspected which counts were actually being re-used, and found an
// interesting pattern where about 38% of the stored values were never
// used again. This could potentially be used to optimize (at least
// memory usage) further...
