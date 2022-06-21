function main() {
	const message = 'You probably did not mean to import this package! See the README here: https://github.com/zgriesinger/noist for more information!';
	console.error(message);
	throw new Error(message);
}
exports.main = main;