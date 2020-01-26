#!/usr/bin/env node

import yargs from 'yargs';
import globby from 'globby';

const cli = yargs
  .demandCommand()
  .help()
  .wrap(72);

globby
  .sync(`${__dirname}/commands/*/command.ts`, {absolute: true})
  .forEach(modulePath => {
    cli.command(require(modulePath).command)
  });

// @ts-ignore
const commands = cli.getCommandInstance().getCommands();
const argv = cli.argv;

if (!argv._[0] || commands.indexOf(argv._[0]) === -1) {
  console.log('non-existing or no command specified\n');
  yargs.showHelp();
  process.exit(1);
}
