#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import axios from "axios";
import dotenv from "dotenv";

// load dotenv configs
dotenv.config()

// styling of the quote box
function displayQuote(quoteText, quoteAuthor) {
    let quote = chalk.white.bold(quoteText);
    const author = chalk.white.bold.italic.dim(`\n\n - ${quoteAuthor}`)
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
        align: "center",
        width: 100,
        padding: {
            top: 2,
            bottom: 1,
        },
        margin: 4,
        float: "center",
        textAlignment: "center"

    };

    const quoteBox = boxen(quote, boxenOptions);

    console.log(quoteBox)
}

// fetch a random quote
async function fetchRandomQuote() {
    await axios
        .get("https://quotezen.vercel.app/api/quotes/random")
        .then((response) => {
            let quote = response.data

            displayQuote(quote.quote, quote.author)
        })
        .catch((err) => console.log(err));
}

await fetchRandomQuote()