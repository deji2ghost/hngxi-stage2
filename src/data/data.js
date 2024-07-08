import driedFruit from '../images/dried-fruits.png'
import cashewNuts from '../images/cashewnuts.png'
import nutMixedProduct from '../images/nut-mixed-product.png'
import friedCashew from "../images/fried-cashew.png"
import walNut from "../images/walnuts.png"
import almondNut from "../images/almondNuts.png"
import pecanNuts from "../images/pecanNuts.png"
import Raisins from "../images/raisins.png"
import driedCranberries from "../images/dried-cranberries.png"
import chiaSeeds from "../images/chiaSeeds.png"
import honeyRoastedPeanuts from "../images/honey-roasted-peanuts.png"
import RoastedPeanuts from "../images/roasted-peanuts.png"
import punpkinSeeds from "../images/punpkin-seeds.png"
import organicLeaf from '../images/footer/organic.png'
import shipping from '../images/footer/shipping.png'

export const threeDivs = [
    {
        id: 1,
        image: driedFruit,
        description: 'Discover different varieties',
    },
    {
        id: 2,
        image: cashewNuts,
        description: 'Organic Nuts and seeds with premuim quality',
    },
    {
        id: 3,
        image: nutMixedProduct,
        description: 'crack open the goodness of our nuts',
    }
]

export const products =[
    {
        id: 1,
        image: friedCashew,
        price: '50',
        name: 'Cashew Nuts',
    },
    {
        id: 2,
        image: walNut,
        price: '40',
        name: 'Wal Nuts',
        description: 'Walnuts are a type of tree nut that is rich in nutrients and has a distinctive appearance and flavor. walnuts are a delicious and nutritious snack that can be enjoyed on their own or used in a variety of recipes, from baked goods to savory dishes.'
    },
    {
        id: 3,
        image: almondNut,
        price: '50',
        name: 'Almond Nuts',
    },
    {
        id: 4,
        image: pecanNuts,
        price: '30',
        name: 'Pecan Nuts',
    }
]

export const otherProducts =[
    {
        id: 1,
        image: honeyRoastedPeanuts,
        price: '25',
        name: 'Honey Roasted peanuts',
    },
    {
        id: 2,
        image: RoastedPeanuts,
        price: '15',
        name: 'Roasted peanuts',
    },
    {
        id: 3,
        image: chiaSeeds,
        price: '10',
        name: 'Chia Seeds',
        description: 'Chia seeds are a type of edible seed that comes from the plant Salvia hispanica, native to Central America and Mexico.They have been a staple food in many cultures for centuries, and are highly valued for their nutritional and health benefits.'
    },
    {
        id: 4,
        image: punpkinSeeds,
        price: '20',
        name: 'Punpkin Seeds',
    },
    {
        id: 5,
        image: Raisins,
        price: '35',
        name: 'Raisins',
    },
    {
        id: 6,
        image: driedCranberries,
        price: '33',
        name: 'Dried Cranberries',
    }
]

export const footer=[
    {
        id: 1,
        heading: '100% Organic',
        paragraph: 'We source our  products from certified organic farms and suppliers',
        image: organicLeaf,
    },
    {
        id: 2,
        heading: 'Shipping',
        paragraph: 'Fastest Delivery nationwide',
        image: shipping,
    }
]

export const recentlyViewed =[
    {
        id: 1,
        name: 'Cashew Nuts',
        image: cashewNuts,
        price: '50'
    },
    {
        id: 2,
        name: 'Raisins',
        image: Raisins,
        price: '35'
    },
    {
        id: 3,
        name: 'Pumpkin seeds',
        image: punpkinSeeds,
        price: '20'
    }
]