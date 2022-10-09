const quotes = [
  {
    quote: "누군가는 해야되잖아",
    author: "침착맨",
  },
  {
    quote: "하남자 특",
    author: "침착맨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
