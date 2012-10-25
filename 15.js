// project euler problem 15 - Cameron Lakenen

var start = new Date().getTime(),
	proc = typeof process != 'undefined' ? process : false,
	size = parseInt(proc && proc.argv[2], 10) || 20,
	result;

result = countRoutesBetter(size);

console.log("The number of routes through a  " + size + "x" + size + " grid is " + result +
	" (solution took " + ((new Date().getTime() - start)/1000).toFixed(3) + " seconds)");

// initial aproach, traverses the grid, adding previous count as it goes
// grows at (n+1)^2
function countRoutesBig(s) {
	var grid = [], i, r, c;
	// initialize edges because there is always only one route through them
	for (i = 0; i <= s; ++i) {
		grid[i] = [];
		grid[i][0] = grid[0][i] = 1;
	}
	// fill the grid with route lengths
	for (r = 1; r <= s; ++r) { // row
		for (c = 1; c <= s; ++c) { // col
			grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
		}
	}
	// side note... huh, this grid looks like pascal's triangle... must be a better way to compute this.
	// console.log(grid);

	// bottom corner is the result
	return grid[s][s];
}

// yep! combinations - yay! let's do: 2s choose s
// in fact, it seems like this approach also works to find the number of routes
// to any point in the grid from the start if you just do: (2 * row^2) choose col

// computes n! we could use memoization here too, but it's not really necessary
// here, since this function gets called exactly thrice
function fact(n) {
	var _n = n;
	while (_n > 1) {
		n *= --_n;
	}
	return n;
}

function choose(n, k) {
	// for some reason (probably huge numbers),
	// js is giving me floaters for this sometimes... floor it!
	return Math.floor(fact(n) / fact(k) / fact(n - k));
}

// so finally, the beter approach computes 2s choose s (2s!/s!^2)
function countRoutesBetter(s) {
	return choose(2 * s, s);
}
