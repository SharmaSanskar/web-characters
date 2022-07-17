new fullpage('#fullpage', {
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('h1');
    const quote = section.querySelector('blockquote');

    // Gsap animations
    const tl = gsap.timeline({ delay: 0.5, defaults: { ease: 'power2.out' } });
    tl.fromTo(
      title,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    ).fromTo(quote, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Harvey quotes
    if (destination.index === 0) {
      const harveyQuotes = [
        "I don't play the odds. I play the man.",
        'When you are backed against the wall, break the goddamn thing down.',
        "They think you care, they'll walk all over you.",
        'Let them hate, just make sure they spell your name right.',
        "Sorry, I can't hear you over the sound of how awesome I am.",
        "I don't have dreams, I have goals.",
      ];
      const random = Math.floor(Math.random() * harveyQuotes.length);
      quote.innerText = harveyQuotes[random];
    }

    // Barney quotes
    if (destination.index === 1) {
      const barneyQuotes = [
        "When I'm sad, I stop being sad, and be awesome instead! True story.",
        'A lie is just a really great story that someone ruined with the truth.',
        "It's going to be Legen.. wait for it.. Dary.",
        'Sometimes we search for one thing but discover another.',
        'Suit up!',
        "Whatever you do in this life, it's not legendary unless your friends are there to see it.",
      ];
      const random = Math.floor(Math.random() * barneyQuotes.length);
      quote.innerText = barneyQuotes[random];
    }

    // Lucifer quotes
    if (destination.index === 2) {
      const luciferQuotes = [
        'Tell me, what is it you desire?',
        "I prefer lust over love. It's a little less complicated and a lot more fun.",
        'The best thing to do is always to follow your greatest desire.',
        'Sometimes we are what we are, and we should embrace that.',
        "Life's too short to hold grudges.",
      ];
      const random = Math.floor(Math.random() * luciferQuotes.length);
      quote.innerText = luciferQuotes[random];
    }

    // Chandler quotes
    if (destination.index === 3) {
      const chandlerQuotes = [
        'Gum would be perfection.',
        "I'm not great at the advice. Can I interest you in a sarcastic comment?",
        'I say more dumb things before 9 A.M. than most people say all day.',
        "Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
        'You make me happier than I ever thought I could be and if you let me, I will spend the rest of my life trying to make you feel the same way.',
      ];
      const random = Math.floor(Math.random() * chandlerQuotes.length);
      quote.innerText = chandlerQuotes[random];
    }

    // Patrick quotes
    if (destination.index === 4) {
      const patrickQuotes = [
        'Discipline always comes with a price.',
        'Tea is like a hug in a cup.',
        "When you're dead, you're dead, and until then, there's ice cream!",
        'Every good plan needs a little bit of luck',
        "It's easy to remember when you never forget.",
        'Certainty is the mother of fools.',
      ];
      const random = Math.floor(Math.random() * patrickQuotes.length);
      quote.innerText = patrickQuotes[random];
    }

    // Jeff quotes
    if (destination.index === 5) {
      const jeffQuotes = [
        'Because doing more than the minimum work is my definition of.. failing.',
        "Well, it's been real, but I have a date to catch. Or should I say.. A catch to date.",
        "I discovered at a very early age that if I talk long enough, I can make anything right or wrong. So either I'm God or truth is relative. In either case, booyah!",
        'It’s called chemistry, I have it with everybody!',
        "Can't you be cool like me?",
        'With all due respect.. which is none.. go to hell!',
      ];
      const random = Math.floor(Math.random() * jeffQuotes.length);
      quote.innerText = jeffQuotes[random];
    }

    // Neal quotes
    if (destination.index === 6) {
      const nealQuotes = [
        "It's sometimes good to be a little bad.",
        'To be an artist, you have to know who you are.',
        "Emotion is a con man's sweet spot.",
        "Never think you're the smartest guy in the room. Unless you're the smartest guy in the room.",
      ];
      const random = Math.floor(Math.random() * nealQuotes.length);
      quote.innerText = nealQuotes[random];
    }
  },
});
