export const geolocation = document.querySelector('.geolocation');
export const lead = document.querySelector('.lead');
export const data = document.querySelector('.data');
export const time = document.querySelector('.data__time');
export const day = document.querySelector('.data__day');
export const mouse = document.querySelector('.data__mouse');
export const more = document.querySelector('.more');
export const dayYear = document.querySelector('.more__type_day-year');
export const dayWeek = document.querySelector('.more__type_day-week');
export const week = document.querySelector('.more__type_week');
export const sunrise = document.querySelector('.more__type_sunrise');
export const sunset = document.querySelector('.more__type_sunset');
export const dayLength = document.querySelector('.more__type_day-length');
export const greeting = document.querySelector('.data__greeting');
export const quoteText = document.querySelector('.quote__text');
export const quoteAutor = document.querySelector('.quote__autor');

export const InitialQuote = [
  {
      "q": "The worst part of success is trying to find someone who is happy for you.",
      "a": "Bette Midler"
  },
  {
      "q": "Do not look upon this world with fear and loathing. Bravely face whatever the gods offer.",
      "a": "Morihei Ueshiba"
  },
  {
      "q": "Even if you stumble and fall down, it doesn't mean you've chosen the wrong path.",
      "a": "Zen Proverb"
  },
  {
      "q": "You have a brain and mind of your own. Use it, and reach your own decisions.",
      "a": "Napoleon Hill"
  },
  {
      "q": "It's what you do in the present that will redeem the past and thereby change the future.",
      "a": "Paulo Coelho"
  },
  {
      "q": "The greatest work that kindness does to others is that it makes them kind themselves.",
      "a": "Amelia Earhart"
  },
  {
      "q": "Your home is where your thoughts find peace.",
      "a": "Zen Proverb"
  },
  {
      "q": "You are not only responsible for what you say, but also for what you do not say. ",
      "a": "Martin Luther"
  },
  {
      "q": "It's the job that's never started that takes the longest to finish.",
      "a": "J.R.R. Tolkien"
  },
  {
      "q": "Emancipate yourself from mental slavery, none but ourselves can free our mind.",
      "a": "Bob Marley"
  },
  {
      "q": "Every day passes whether you participate or not.",
      "a": "Ming-Dao Deng"
  },
  {
      "q": "It does not matter how slowly you go so long as you do not stop.",
      "a": "Confucius"
  },
  {
      "q": "The most effective way to do it, is to do it.",
      "a": "Amelia Earhart"
  },
  {
      "q": "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers.",
      "a": "Amelia Earhart"
  },
  {
      "q": "Each day your life grows a day shorter. Make every move count.",
      "a": "Ming-Dao Deng"
  },
  {
      "q": "Many a man has failed because he had his wishbone where his backbone should have been.",
      "a": "Ronald Reagan"
  },
  {
      "q": "Change begets change. Nothing propagates so fast.",
      "a": "Charles Dickens"
  },
  {
      "q": "Absorb what is useful, discard what is not, add what is uniquely your own.",
      "a": "Bruce Lee"
  },
  {
      "q": "An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.",
      "a": "John Tukey"
  },
  {
      "q": "You know the more one does the more one can do.",
      "a": "Amelia Earhart"
  },
  {
      "q": "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
      "a": "Roy T. Bennett"
  },
  {
      "q": "The ability to hold two competing thoughts in one's mind and still be able to function is the mark of a superior mind.",
      "a": "F. Scott Fitzgerald"
  },
  {
      "q": "Time goes from present to past.",
      "a": "Shunryu Suzuki"
  },
  {
      "q": "Yesterday is history, tomorrow is a mystery, today is God's gift, that's why we call it the present.",
      "a": "Joan Rivers"
  },
  {
      "q": "We must learn to live together as brothers or perish together as fools.",
      "a": "Martin Luther King, Jr."
  },
  {
      "q": "A dream doesn't become reality through magic it takes sweat, determination and hard work.",
      "a": "Colin Powell"
  },
  {
      "q": "Use your smile to change the world but don't let the world change your smile.",
      "a": "Unknown"
  },
  {
      "q": "A person is only by the thoughts that he chooses.",
      "a": "James Allen"
  },
  {
      "q": "To injure an opponent is to injure yourself. To control aggression without inflicting injury is the Art of Peace.",
      "a": "Morihei Ueshiba"
  },
  {
      "q": "You get paid in direct proportion to the difficulty of problems you solve.",
      "a": "Elon Musk"
  },
  {
      "q": "I'm not afraid of death, but I'm in no hurry to die.",
      "a": "Stephen Hawking"
  },
  {
      "q": "You have to give up some of the old so that you can make room for the new.",
      "a": "Yanni"
  },
  {
      "q": "Be as fluid as water, do not give your enemies anything solid to attack.",
      "a": "Robert Greene"
  },
  {
      "q": "If you do what you've always done, you'll get what you've always gotten.",
      "a": "Tony Robbins"
  },
  {
      "q": "Forgive those who have hurt you.",
      "a": "Les Brown"
  },
  {
      "q": "Hope itself is like a star- not to be seen in the sunshine of prosperity, and only to be discovered in the night of adversity.",
      "a": "Charles Spurgeon"
  },
  {
      "q": "If there's a definition of freedom, I think it's this: living life on your terms.",
      "a": "Kamal Ravikant"
  },
  {
      "q": "What people need and what they want may be very different.",
      "a": "Elbert Hubbard"
  },
  {
      "q": "The day is for honest men, the night for thieves.",
      "a": "Euripides"
  },
  {
      "q": "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind.",
      "a": "Theodore Roosevelt"
  },
  {
      "q": "A man is literally what he thinks.",
      "a": "James Allen"
  },
  {
      "q": "Rewards and punishment is the lowest form of education.",
      "a": "Zhuangzi"
  },
  {
      "q": "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.",
      "a": "Tony Robbins"
  },
  {
      "q": "If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.",
      "a": "Robert Greene"
  },
  {
      "q": "There are more quarrels smothered by just shutting your mouth, and holding it shut, than by all the wisdom in the world.",
      "a": "Henry Ward Beecher"
  },
  {
      "q": "If ever you feel like an animal among men, be a lion.",
      "a": "Criss Jami"
  },
  {
      "q": "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
      "a": "James Allen",
  },
  {
      "q": "Wisdom is the oneness of mind that guides and permeates all things.",
      "a": "Heraclitus",
  },
  {
      "q": "Obstacles are those frightful things you see when you take your eyes off your goal.",
      "a": "Henry Ford"
  },
  {
      "q": "Remember we're all in this alone.",
      "a": "Lily Tomlin"
  }
]
