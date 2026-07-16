/*
 * Would You Rather — Prompt Decks
 * -------------------------------
 * Loaded as a plain global (no build step):
 *   window.WYR_DECKS = [{ id, name, emoji, color, type, lead?, items }]
 *
 *  - type 'ab'   → items are { a, b } pairs (tap to vote which you'd pick).
 *  - type 'line' → items are strings; `lead` is the sentence starter shown above them.
 *
 * All prompts are kept family-friendly. Add your own anywhere in these lists.
 */
window.WYR_DECKS = [
  {
    id: 'wyr', name: 'Would You Rather', emoji: '🤔', color: '#5b3d94', type: 'ab',
    items: [
      { a: 'Be able to fly', b: 'Be invisible' },
      { a: 'Have unlimited money', b: 'Have unlimited free time' },
      { a: 'Always be 10 minutes late', b: 'Always be 20 minutes early' },
      { a: 'Live without music', b: 'Live without movies' },
      { a: 'Have a rewind button for life', b: 'Have a pause button for life' },
      { a: 'Be a famous actor', b: 'Be a famous musician' },
      { a: 'Give up pizza forever', b: 'Give up ice cream forever' },
      { a: 'Speak every language', b: 'Play every instrument' },
      { a: 'Have a pet dragon', b: 'Have a pet dinosaur' },
      { a: 'Always know when someone is lying', b: 'Always get away with lying' },
      { a: 'Explore outer space', b: 'Explore the deep ocean' },
      { a: 'Be the funniest person in the room', b: 'Be the smartest person in the room' },
      { a: 'Never have to sleep', b: 'Never have to eat' },
      { a: 'Have super strength', b: 'Have super speed' },
      { a: 'Live in a big city', b: 'Live in the countryside' },
      { a: 'Time travel to the past', b: 'Time travel to the future' },
      { a: 'Talk to animals', b: 'Speak any human language' },
      { a: 'Have a personal chef', b: 'Have a personal driver' },
      { a: 'Win the lottery', b: 'Land your perfect job' },
      { a: 'Never lose your phone again', b: 'Never lose your keys again' },
      { a: 'Read minds', b: 'Predict the future' },
      { a: 'Be a wizard', b: 'Be a superhero' },
      { a: 'Have a photographic memory', b: 'Have a genius-level IQ' },
      { a: 'Fight one horse-sized duck', b: 'Fight 100 duck-sized horses' },
      { a: 'Only be able to whisper', b: 'Only be able to shout' },
      { a: 'Live in a treehouse', b: 'Live on a houseboat' },
      { a: 'Master every sport', b: 'Master every board game' },
      { a: 'Never use social media again', b: 'Never watch TV again' },
      { a: 'Teleport anywhere instantly', b: 'Never wait in line again' },
      { a: 'Have free travel forever', b: 'Have free food forever' },
      { a: 'Always sing instead of speak', b: 'Always dance everywhere you go' },
      { a: 'Be really hot all the time', b: 'Be really cold all the time' },
      { a: 'Skip every awkward moment', b: 'Rewind any conversation' },
      { a: 'Be a master chef', b: 'Be a master painter' }
    ]
  },
  {
    id: 'thisorthat', name: 'This or That', emoji: '⚡', color: '#d99a13', type: 'ab',
    items: [
      { a: 'Sweet', b: 'Salty' }, { a: 'Beach', b: 'Mountains' }, { a: 'Coffee', b: 'Tea' },
      { a: 'Cats', b: 'Dogs' }, { a: 'Summer', b: 'Winter' }, { a: 'Books', b: 'Movies' },
      { a: 'Early bird', b: 'Night owl' }, { a: 'Text', b: 'Call' }, { a: 'Pancakes', b: 'Waffles' },
      { a: 'Sneakers', b: 'Sandals' }, { a: 'Pizza', b: 'Tacos' }, { a: 'Sunrise', b: 'Sunset' },
      { a: 'Save it', b: 'Spend it' }, { a: 'Window seat', b: 'Aisle seat' }, { a: 'Comedy', b: 'Horror' },
      { a: 'Ketchup', b: 'Mustard' }, { a: 'Sand', b: 'Snow' }, { a: 'Big city', b: 'Small town' },
      { a: 'Plan ahead', b: 'Go with the flow' }, { a: 'Chocolate', b: 'Vanilla' },
      { a: 'Road trip', b: 'Flight' }, { a: 'Morning shower', b: 'Night shower' },
      { a: 'Board games', b: 'Video games' }, { a: 'Cardio', b: 'Weights' },
      { a: 'Fantasy', b: 'Sci-fi' }, { a: 'Spicy', b: 'Mild' }, { a: 'Introvert', b: 'Extrovert' },
      { a: 'Salty snacks', b: 'Sweet snacks' }, { a: 'Emoji everything', b: 'No emoji ever' },
      { a: 'Tea', b: 'Hot chocolate' }
    ]
  },
  {
    id: 'nhie', name: 'Never Have I Ever', emoji: '🙈', color: '#4fa863', type: 'line',
    lead: 'Never have I ever…',
    items: [
      'been on live TV', 'broken a bone', 'gone a whole day without my phone',
      'sung karaoke in public', 'fallen asleep in a movie theater',
      'forgotten someone’s name right after meeting them', 'laughed so hard I cried',
      'stayed up for 24 hours straight', 'gotten lost in a new city',
      'sent a text to the wrong person', 'been camping', 'ridden a horse', 'met a celebrity',
      'cried during a cartoon', 'binge-watched a whole series in one day',
      'been the last one to leave a party', 'tripped in public and played it cool',
      'talked my way out of trouble', 'eaten dessert before dinner', 'danced in the rain',
      'gone a week without social media', 'pulled an all-nighter to finish something',
      'won a trophy or medal', 'cooked a meal completely from scratch', 'been on a roller coaster',
      'changed a flat tire', 'kept a New Year’s resolution', 'gotten a nickname I didn’t like',
      'laughed at exactly the wrong moment', 'forgotten why I walked into a room'
    ]
  },
  {
    id: 'mostlikely', name: 'Most Likely To', emoji: '👉', color: '#e0693f', type: 'line',
    lead: 'Who here is most likely to…',
    items: [
      'become famous', 'forget their own birthday', 'survive a zombie apocalypse',
      'become a millionaire', 'laugh at the wrong moment', 'move to another country',
      'win a reality show', 'sleep through their alarm', 'start their own business',
      'cry at a wedding', 'get lost with a map in hand', 'become a teacher', 'adopt ten pets',
      'go viral online', 'eat the last slice without asking', 'plan the whole group trip',
      'show up fashionably late', 'take over the dance floor', 'run a marathon', 'write a book',
      'be the first to fall asleep', 'talk to strangers everywhere', 'forget where they parked',
      'become a chef', 'take the most photos', 'save someone in an emergency',
      'binge snacks at midnight', 'give the best advice', 'start a food fight', 'win an award'
    ]
  }
];
