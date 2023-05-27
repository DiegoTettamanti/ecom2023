import { Command } from 'commander';

const commander = new Command()

commander
    .option('--mode <mode>', 'Modo de ejecucion de nuestra app')
    .parse()


module.exports = {commander}

