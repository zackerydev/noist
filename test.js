const { main } = require('./');

try {
	main()
} catch(e) {
	console.log(e);
	console.log('Caught the error you didn\'t mean to do this, its working');
	process.exit(0);
}

process.exit(1);