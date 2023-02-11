#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

let quote = chalk.white.bold("To do great things is difficult; but to command great things is more difficult.!");
const author = chalk.white.bold.italic.dim("\n\n- Unknown")

quote += author;

const title = chalk.white.bold("QuoteZen")
const leftQuotation = chalk.blueBright.bold("“")
const rightQuotation = chalk.blueBright.bold("”")

const boxenOptions = {
    title: title,
    titleAlignment: "center",
    borderStyle: {
        topLeft: leftQuotation,
        topRight: '╮',
        bottomLeft: '╰',
        bottomRight: rightQuotation,
        top: '─',
        bottom: '─',
        left: '│',
        right: '│'
    },
    borderColor: "gray",
    align:"center",
    width:100,
    padding:{
        top: 2,
        bottom: 1,
    },
    margin:4,
    float:"center",
    textAlignment:"center"

};

const quoteBox = boxen(quote, boxenOptions);

console.log(quoteBox)