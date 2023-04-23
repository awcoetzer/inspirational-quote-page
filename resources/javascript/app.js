const emoteEl = document.querySelector('.quote-emote');
const quoteTextEl = document.querySelector('.quote-text');
const quoteAuthorEl = document.querySelector('.quote-author');
const quoteContainerEl = document.querySelector('.quote-container');
const btnEl = document.querySelector('.btn');

const quotes = [
  {
    quote:
      'My mother always used to say: The older you get, the better you get, unless you’re a banana.',
    author: 'Betty White',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote:
      'You know you’ve reached middle age when you’re cautioned to slow down by your doctor, instead of by the police.',
    author: 'Joan Rivers',
  },
  {
    quote:
      'As you get older, three things happen. The first is your memory goes, and I can’t remember the other two.',
    author: 'Sir Norman Wisdom',
  },
  {
    quote:
      'The best way to appreciate your job is to imagine yourself without one.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      'Never put off till tomorrow what you can do the day after tomorrow just as well.',
    author: 'Mark Twain',
  },
  {
    quote:
      'There is no sunrise so beautiful that it is worth waking me up to see it.',
    author: 'Mindy Kaling',
  },
  {
    quote:
      'I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.',
    author: 'Bill Gates',
  },
  {
    quote: 'No man goes before his time — unless his boss leaves early.',
    author: 'Groucho Marx',
  },
  {
    quote: 'People say nothing is impossible, but I do nothing every day.',
    author: 'Winnie the Pooh',
  },
];

const randomNum = function (num) {
  return Math.trunc(Math.random() * num) + 1;
};

const randomBackground = function () {
  return (quoteContainerEl.style.background = `no-repeat center / cover url("./resources/images/backgrounds/image-${randomNum(
    10
  )}.jpg")`);
};

const randomEmote = function () {
  return (emoteEl.style.background = `no-repeat center / cover url("./resources/images/emotes/image-${randomNum(
    18
  )}.png")`);
};

const randomQuote = function () {
  return (
    (quoteTextEl.textContent = quotes[randomNum(quotes.length - 1)].quote),
    (quoteAuthorEl.innerHTML = `&mdash; ${
      quotes[randomNum(quotes.length - 1)].author
    }`)
  );
};

randomBackground();
randomEmote();
randomQuote();

btnEl.addEventListener('click', function () {
  randomBackground();
  randomEmote();
  randomQuote();
});
