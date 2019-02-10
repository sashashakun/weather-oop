#!/usr/bin/env node
import 'babel-polyfill';
import main from '..';
import program from 'commander';

const { args } = program
  .option('-s, --service [service]', 'Choose service: metaweather, openweather')
  .parse(process.argv);

main(args[0], program.service).then(res => console.log(res));