// Fibonacci Generator
function fibonacciGenerator(n) {
	let fibonacciArray = []

	if (n === 1 || n === 0) {
		fibonacciArray.push(0)
	} else if (n === 2) {
		fibonacciArray.push(0)
		fibonacciArray.push(1)
	} else {
		fibonacciArray.push(0)
		fibonacciArray.push(1)

		for (let i = 2; i < n; i++) {
			let n1 = fibonacciArray[fibonacciArray.length - 1]
			let n2 = fibonacciArray[fibonacciArray.length - 2]
			let n3 = n1 + n2

			fibonacciArray.push(n3)
		}
	}

	console.log(fibonacciArray)
}
