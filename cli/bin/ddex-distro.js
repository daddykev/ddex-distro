#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import { createCommand } from '../commands/create.js';
import { initCommand } from '../commands/init.js';
import { deployCommand } from '../commands/deploy.js';
import { configureCommand } from '../commands/configure.js';
import { targetCommand } from '../commands/target.js';
import { devCommand } from '../commands/dev.js';

console.log(
  chalk.cyan(
    figlet.textSync('DDEX Distro', { horizontalLayout: 'full' })
  )
);

program
  .name('ddex-distro')
  .description('CLI for creating and managing DDEX Distro distribution platforms')
  .version('1.0.0');

// Register commands
createCommand(program);
initCommand(program);
deployCommand(program);
configureCommand(program);
targetCommand(program);
devCommand(program);

program.parse(process.argv);