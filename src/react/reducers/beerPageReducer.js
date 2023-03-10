export default function beerpage (state = {
    id: 118,
    name: "Bounty Hunter - Shareholder Brew",
    tagline: "Beatnik Milk Stout.",
    first_brewed: "02/2015",
    description: "Brewed with our Equity Punks this rich, smooth stout is brewed with a blend of six malts, resulting in a welcoming, resonant black beer. From start to finish it carries an intense roastiness reminiscent of dark chocolate intertwined with a delicate hint of coconut and caramel.",
    image_url: "https://images.punkapi.com/v2/118.png",
    abv: 8.5,
    ibu: 35,
    target_fg: 1020,
    target_og: 1068,
    ebc: 250,
    srm: 55,
    ph: 4.2,
    attenuation_level: 70.6,
    volume: {
        value: 20,
        unit: "liters"
    },
    boil_volume: {
        value: 25,
        unit: "liters"
    },
    method: {
        mash_temp: [
            {
                temp: {
                    value: 65,
                    unit: "celsius"
                },
                duration: 75
            }
        ],
        fermentation: {
            temp: {
                value: 19,
                unit: "celsius"
            }
        },
        twist: "Cacao Nibs: 25g at end, Coconut Chips: 20g at end, Lactose (wk): 375g at end, Coconut Chips: 50g at FV"
    },
    ingredients: {
        malt: [
            {
                name: "Pale Ale",
                amount: {
                    value: 2.13,
                    unit: "kilograms"
                }
            },
            {
                name: "Amber",
                amount: {
                    value: 0.25,
                    unit: "kilograms"
                }
            },
            {
                name: "Flaked Oats",
                amount: {
                    value: 0.25,
                    unit: "kilograms"
                }
            },
            {
                name: "Chocolate",
                amount: {
                    value: 0.38,
                    unit: "kilograms"
                }
            },
            {
                name: "Roasted Barley",
                amount: {
                    value: 0.13,
                    unit: "kilograms"
                }
            },
            {
                name: "Carafa Special Malt Type 3",
                amount: {
                    value: 0.19,
                    unit: "kilograms"
                }
            }
        ],
        hops: [
            {
                name: "Galena",
                amount: {
                    value: 12.5,
                    unit: "grams"
                },
                add: "start",
                attribute: "bitter"
            }
        ],
        yeast: "Wyeast 1056 - American Ale???"
    },
    food_pairing: [
        "Coconut beef red curry",
        "Butternut squash soup with toasted almonds",
        "Chocolate coated macaroons"
    ],
    brewers_tips: "Lightly toast the coconut chips to allow better interaction with the hot wort.",
    contributed_by: "Sam Mason <samjbmason>",
},
  action) {
        switch (action.type) {
            case 'BEERPAGEREADY':
                return {...action.data};
            default:
                return state;
        }
}