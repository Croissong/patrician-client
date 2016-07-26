import I from 'immutable';

export const MATERIALS = I.fromJS([
  'beer', 'bricks', 'cloth', 'fish', 'grain', 'hemp',
  'honey', 'iron goods', 'leather', 'meat', 'pig iron',
  'pitch', 'pottery', 'salt', 'skins', 'spices', 'timber',
  'whale oil', 'wine', 'wool'
]);

export const initialState = I.fromJS(
  { town: { values: { Luebeck: {
    unknown: 934, total_weight: 253, name: 'Luebeck', materials: {
      pitch: { sell: 246, buy: 333, amount: 426 },
      hemp: { sell: 12, buy: 758, amount: 200 },
      spices: { sell: 441, buy: 521, amount: 786 },
      wine: { sell: 411, buy: 62, amount: 920 },
      leather: { sell: 411, buy: 919, amount: 115 },
      meat: { sell: 830, buy: 871, amount: 93 },
      pottery: { sell: 629, buy: 459, amount: 729 },
      beer: { sell: 847, buy: 879, amount: 4 },
      bricks: { sell: 778, buy: 495, amount: 174 },
      wool: { sell: 180, buy: 776, amount: 192 },
      salt: { sell: 53, buy: 838, amount: 466 },
      skins: { sell: 989, buy: 281, amount: 210 },
      timber: { sell: 303, buy: 733, amount: 466 },
      fish: { sell: 960, buy: 525, amount: 551 },
      'pig iron': { sell: 706, buy: 630, amount: 551 },
      cloth: { sell: 500, buy: 802, amount: 300 },
      grain: { sell: 675, buy: 817, amount: 964 },
      'whale oil': { sell: 810, buy: 89, amount: 316 },
      honey: { sell: 675, buy: 322, amount: 355 },
      'iron goods': { sell: 460, buy: 421, amount: 217 }
    }, comparison: null }
  }, selected_material: {}, compare: false, selected: ['Luebeck']
  }, ship: { values: { Euphradite: {
    name: 'Euphradite', materials: {
      pitch: { average_price: 837, amount: 896 },
      hemp: { average_price: 648, amount: 690 },
      spices: { average_price: 613, amount: 557 },
      wine: { average_price: 538, amount: 200 },
      leather: { average_price: 923, amount: 110 },
      meat: { average_price: 38, amount: 972 },
      pottery: { average_price: 465, amount: 116 },
      beer: { average_price: 849, amount: 727 },
      bricks: { average_price: 813, amount: 728 },
      wool: { average_price: 275, amount: 575 },
      salt: { average_price: 272, amount: 456 },
      skins: { average_price: 463, amount: 631 },
      timber: { average_price: 330, amount: 742 },
      fish: { average_price: 541, amount: 878 },
      'pig iron': { average_price: 457, amount: 654 },
      cloth: { average_price: 556, amount: 813 },
      grain: { average_price: 164, amount: 963 },
      'whale oil': { average_price: 560, amount: 708 },
      honey: { average_price: 613, amount: 131 },
      'iron goods': { average_price: 697, amount: 574 }
    }}, Titanic: { name: 'Titanic', materials: {
      pitch: { average_price: 711, amount: 202 },
      hemp: { average_price: 502, amount: 744 },
      spices: { average_price: 961, amount: 690 },
      wine: { average_price: 876, amount: 876 },
      leather: { average_price: 550, amount: 435 },
      meat: { average_price: 641, amount: 365 },
      pottery: { average_price: 119, amount: 491 },
      beer: { average_price: 191, amount: 158 },
      bricks: { average_price: 988, amount: 839 },
      wool: { average_price: 905, amount: 861 },
      salt: { average_price: 421, amount: 161 },
      skins: { average_price: 700, amount: 495 },
      timber: { average_price: 307, amount: 291 },
      fish: { average_price: 997, amount: 130 },
      'pig iron': { average_price: 17, amount: 148 },
      cloth: { average_price: 521, amount: 104 },
      grain: { average_price: 432, amount: 156 },
      'whale oil': { average_price: 655, amount: 228 },
      honey: { average_price: 822, amount: 870 },
      'iron goods': { average_price: 47, amount: 865 }
    }}}, selected: 'Euphradite'}}
);
