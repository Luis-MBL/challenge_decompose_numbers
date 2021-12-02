
const program = require('commander');
const  DecomposeNumber = require ('./src/shared/utils/DecomposeNumber');

program.version('0.1.0')
  .command('find-divisors')
  .alias('fd')
  .description('Find divisors and prime divisors of a number')
  .action(async (_, {args}) => {
    const [number] = args;
    const {divisors, prime_divisors } = await DecomposeNumber(+number)
    console.log({divisors, prime_divisors});
  });

program.parse(process.argv);
