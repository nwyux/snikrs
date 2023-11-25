import img1 from '../img/sneakers/primary/airforce1.webp'
import af1_1 from '../img/sneakers/secondary/airforce1_1.webp'
import af1_2 from '../img/sneakers/secondary/airforce1_2.webp'

import img2 from '../img/sneakers/primary/blackphantom.webp'
import aj1bf_1 from '../img/sneakers/secondary/aj1bf_1.webp'
import aj1bf_2 from '../img/sneakers/secondary/aj1bf_2.webp'

import img3 from '../img/sneakers/primary/yzy700_1.webp'
import yzy1_1 from '../img/sneakers/secondary/yzy1_1.webp'
import yzy1_2 from '../img/sneakers/secondary/yzy1_2.webp'

import img4 from '../img/sneakers/primary/newb.webp'
import nb1_1 from '../img/sneakers/secondary/nb1_1.webp'
import nb1_2 from '../img/sneakers/secondary/nb1_2.webp'

import img5 from '../img/sneakers/primary/dunkpink.webp'
import dunk1_1 from '../img/sneakers/secondary/dunk1_1.webp'
import dunk1_2 from '../img/sneakers/secondary/dunk1_2.webp'

export const items = [

    {
        id: 1,
        category: "Men",
        brand : "Nike",
        name: "Nike Air Force 1",
        price: 99.99,
        img: img1,
        otherImgs: [
            af1_1,
            af1_2,
        ],
        description: "Undoubtedly the most emblematic silhouette from Nike : there Air Force 1. Created by Bruce Kilgore in 1982, the first pair with technology Nike AIR keeps reissued in a multitude of colors each season.",
        color: "White",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: true,
        isNew: false,
        isSale: false,
        isSoldOut: false,
        isAvailable: true,
    },
    {
        id: 2,
        category: "Men",
        brand : "Nike",
        name: "Nike AJ1 Low Black Phantom",
        price: 249.99,
        img: img2,
        otherImgs: [
            aj1bf_1,
            aj1bf_2,
        ],
        description: "Nike And Travis Scoot are back with their emblematic collaboration on the Air Jordan 1. Here in a new, most dark.",
        color: "Black",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: false,
        isNew: false,
        isSale: false,
        isSoldOut: true,
        isAvailable: true,
    },
    {
        id: 3,
        category: "Men",
        brand : "Adidas",
        name: "Adidas Yeezy 700 Geode",
        price: 219.99,
        img: img3,
        otherImgs: [
            yzy1_1,
            yzy1_2,
        ],
        description: "The label of Kanye West reveals a new colorful variation of its 700 to Motorsport inspirations! There Adidas Yeezy 700 MNVN Geode presents a base in mesh mauve which spreads throughout the upper.",
        color: "Geode",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: false,
        isNew: true,
        isSale: false,
        isSoldOut: false,
        isAvailable: true,
    },
    {
        id: 4,
        category: "Men",
        brand : "New Balance",
        name: "New Balance 1906D",
        price: 245,
        img: img4,
        otherImgs: [
            nb1_1,
            nb1_2,
        ],
        description: "Through his new silhouette, the 1906D, New Balance reveals a new color triple black of his Protection Pack with a unstructured style. ",
        color: "Black",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: false,
        isNew: false,
        isSale: true,
        isSoldOut: false,
        isAvailable: true,
    },
    {
        id: 5,
        category: "Women",
        brand : "Nike",
        name: "Nike Dunk Low Barbie",
        price: 149.99,
        img: img5,
        otherImgs: [
            dunk1_1,
            dunk1_2,
        ],
        description: "As the start of the school year approaches, the Sportswear giant continue to highlight its Dunk Low. There Nike Dunk Low Triple Pink (Barbie) reveals an entirely rose.",
        color: "Pink",
        size: [
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
        ],
        isTrending: true,
        isNew: true,
        isSale: false,
        isSoldOut: false,
        isAvailable: true,
    },

]