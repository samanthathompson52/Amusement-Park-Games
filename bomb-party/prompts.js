/*
 * Bomb Party — Prompts
 * --------------------
 * Two ways to play, loaded as a plain global (no build step):
 *   window.BOMB_PROMPTS = { letters: [...], categories: [...] }
 *
 *  - letters:    a fragment your spoken word must CONTAIN (e.g. "TR" → "sTReet").
 *  - categories: a topic; say something that fits (e.g. "A fruit" → "banana").
 *
 * Add your own anywhere in these lists.
 */
window.BOMB_PROMPTS = {
  letters: [
    'TR', 'ST', 'CH', 'PL', 'BR', 'CL', 'SP', 'GR', 'PR', 'SH',
    'TH', 'CR', 'FR', 'SL', 'SW', 'SC', 'SM', 'SN', 'DR', 'BL',
    'ING', 'ATE', 'ION', 'ENT', 'EST', 'ALL', 'OUT', 'INE', 'ACK', 'OCK',
    'ICK', 'ELL', 'ILL', 'ORE', 'ARE', 'AND', 'END', 'ANT', 'ART', 'EAR',
    'CON', 'PER', 'PRO', 'COM', 'DIS', 'OVER', 'SUB', 'UNDER',
    'AIN', 'AKE', 'AME', 'ASH', 'EAT', 'EED', 'OWN', 'OOK', 'OUND', 'IGHT',
    'IDE', 'IRE', 'OAT', 'EAM', 'OON', 'AGE', 'ICE', 'OLD'
  ],
  categories: [
    'A fruit', 'A vegetable', 'A country', 'A city', 'An animal',
    'A zoo animal', 'A dog breed', 'A color', 'A movie', 'A movie villain',
    'A superhero', 'A cartoon character', 'A board game', 'A sport', 'A famous athlete',
    'A musical instrument', 'A band', 'A song', 'A pizza topping', 'An ice-cream flavor',
    'A breakfast food', 'A fast-food chain', 'Something in a kitchen', 'Something in a bathroom', 'Something in a classroom',
    'Something you pack for a trip', 'A car brand', 'A phone app', 'A social media platform', 'A job',
    'A school subject', 'A body part', 'An item of clothing', 'A type of shoe', 'A holiday',
    'A month', 'A US state', 'A capital city', 'A river', 'A planet',
    'A dinosaur', 'A bird', 'A fish', 'An insect', 'A tree',
    'A flower', 'A cold drink', 'A dessert', 'A candy', 'A breakfast cereal',
    'A cheese', 'A type of pasta', 'A hot drink', 'A card game', 'A video game',
    'A TV show', 'A book', 'A language', 'A gemstone', 'A thing with wheels'
  ]
};
