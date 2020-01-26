#!/usr/bin/env node

import { Cli, Command, CommandClass } from 'clipanion';
import globby from 'globby';
import pkg from '../package.json';

const cli = new Cli({
  binaryLabel: pkg.name,
  binaryName: `bin`,
  binaryVersion: pkg.version
});

globby
  .sync(`${__dirname}/commands/*/command.ts`, { absolute: true })
  .forEach(async modulePath => {
    const entries = Object.entries(require(modulePath));

    if (entries.length === 0) {
      throw new Error(`${modulePath} doesn't contain exports`);
    }

    const [key, commandClass] = entries[0];

    if ((commandClass as any).prototype instanceof Command) {
      cli.register(commandClass as unknown as CommandClass);
    } else {
      throw new Error(`${modulePath}:${key} isn't extended from Command class`);
    }
  });

cli.runExit(process.argv.slice(2), {
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr
});
