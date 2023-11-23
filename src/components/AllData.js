import img1 from '../img/sneakers/primary/airforce1.webp'
import af1_1 from '../img/sneakers/secondary/airforce1_1.webp'
import af1_2 from '../img/sneakers/secondary/airforce1_2.webp'
import af1_3 from '../img/sneakers/secondary/airforce1_3.webp'
import af1_4 from '../img/sneakers/secondary/airforce1_4.webp'

import img2 from '../img/sneakers/primary/blackphantom.webp'

import img3 from '../img/sneakers/primary/yzy700_1.webp'

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
            af1_3,
            af1_4,
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
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
    },
    {
        id: 2,
        category: "Men",
        brand : "Nike",
        name: "Nike AJ1 Low Black Phantom",
        price: 199.99,
        img: img2,
        otherImgs: [
            af1_1,
            af1_2,
            af1_3,
            af1_4,
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        color: "Black",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: true,
        isNew: true,
        isSale: false,
        isSoldOut: false,
    },
    {
        id: 3,
        category: "Men",
        brand : "Adidas",
        name: "Adidas Yeezy 700 Geode",
        price: 199.99,
        img: img3,
        otherImgs: [
            af1_1,
            af1_2,
            af1_3,
            af1_4,
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        color: "Geode",
        size: [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
        ],
        isTrending: true,
        isNew: true,
        isSale: false,
        isSoldOut: false,
    },

]