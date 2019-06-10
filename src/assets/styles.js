import asyncComponent from '../hoc/asyncComponent';

export const style01 = {
    name: 'Nerd Bag',
    style: {
        fontFamily: "Courier New",
        border: "dashed 6px",
        background: "#11df11"
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/NerdBag/NerdBag'))
};

export const style02 = {
    name: "Orange 'n Blue ",
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#4aaaff",
        border: "ridge 6px #4a7aff",
        borderRadius: "6px"
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/OrangeNBlue/OrangeNBlue'))
};

export const style03 = {
    name: 'Happy Flowers',
    style: {
        fontFamily: "Garamond",
        backgroundColor: "#ff2222",
        color: "white",
        border: "dotted 6px #ffffff",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/HappyFlowers/HappyFlowers'))
};

export const style04 = {
    name: 'Christmas present',
    style: {
        fontFamily: "Garamond",
        backgroundColor: "#e7001f",
        color: "#fff5cb",
        border: "inset 6px #00b7be",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/ChristmasPresent/ChristmasPresent'))
};

export const style05 = {
    name: 'Snowy presents',
    style: {
        fontFamily: "Garamond",
        backgroundColor: "#ffffff",
        color: "#ba0d5c",
        border: "dashed 6px #ba0d5c",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/SnowyPresent/SnowyPresent'))
};

export const style06 = {
    name: 'Fine pralines',
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#e9edf5",
        color: "#3440db",
        border: "ridge 6px #e80e03",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/FinePralines/FinePralines'))
};

export const style07 = {
    name: 'Small ring box',
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#f1543f",
        color: "#2b3b4e",
        border: "ridge 6px #2b3b4e",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/SmallRingBox/SmallRingBox'))
};

export const style08 = {
    name: 'Baby sky',
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#b8eef1",
        color: "#121149",
        border: "ridge 6px #b8eef1",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/BabySky/BabySky'))
};

export const style09 = {
    name: 'Small gift card',
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#38c6d9",
        color: "#121149",
        border: "outset 6px #ff6161",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/SmallGiftCard/SmallGiftCard'))
};

export const style10 = {
    name: 'Big Orange',
    style: {
        fontFamily: "Times New Roman",
        backgroundColor: "#ffcebf",
        color: "#dd3400",
        border: "inset 6px #dd3400",
    },
    component: asyncComponent(() => import('../containers/PresentBoxes/BigOrange/BigOrange'))
};
