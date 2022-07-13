// @ts-ignore
import nuoli from '../components/icon/nuoli.png'


const vesitorni: IHotSpot = {
    type: "custom",
    pitch: 0,
    yaw: 0,
    text: "Vesitorni",
    handleClickArg: { index: 0 },
    tooltipArg: { "name": "Vesitorni", "imageUrl": nuoli },
    cssClass: "jumpTo"
}

const tori: IHotSpot = {
    type: "custom",
    pitch: 0,
    yaw: 0,
    text: "Tori",
    handleClickArg: { index: 1 },
    tooltipArg: { "name": "Tori", "imageUrl": nuoli },
    cssClass: "jumpTo"
}

const satama: IHotSpot = {
    type: "custom",
    pitch: 0,
    yaw: 0,
    text: "Satama",
    handleClickArg: { index: 2 },
    tooltipArg: { "name": "Satama", "imageUrl": nuoli },
    cssClass: "jumpTo"
}

const lintutarha: IHotSpot = {
    type: "custom",
    pitch: 0,
    yaw: 0,
    text: "Lintutarha",
    handleClickArg: { index: 3 },
    tooltipArg: { "name": "Lintutarha", "imageUrl": nuoli },
    cssClass: "jumpTo"
}


const data: IPannelum[] = [
    {
        "index": 0,
        "image": "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/vesitorni-md.jpeg",
        preview: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/vesitorni-sm.jpeg",
        "pitch": -15,
        "yaw": 60,
        "hfov": 110,
        "autoRotate": 5,
        "hotspotDebug": false,
        "showControls": false,
        // "author": "Heinolan kaupunki",
        "title": "Heinolan vesitorni",
        "hotspots": [
            {
                "type": "info",
                "pitch": -32.397136263831705,
                "yaw": -103.54162669383389,
                "text": "Heinolan heinäsaari",
                "URL": "https://www.visitheinasaari.fi/",
                "cssClass": "jumpTo"
            },
            {
                ...tori,
                pitch: -9.692922163345617,
                yaw: 160.52623857001183,
            },
            {
                ...satama,
                pitch: -3.1859730016443075,
                yaw: 143.11554802842574,
            },
            {
                ...lintutarha,
                pitch: -16.89734713668819,
                yaw: -82.34678509597147,
            }
        ]
    },
    {
        "index": 1,
        "image": "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/tori-md.jpeg",
        preview: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/tori-sm.jpeg",
        "pitch": -15,
        "yaw": 60,
        "hfov": 110,
        "autoRotate": 5,
        "hotspotDebug": false,
        "showControls": false,
        // "author": "Heinolan kaupunki",
        "title": "Heinolan tori",
        "hotspots": [
            {
                "type": "info",
                "pitch": -32.397136263831705,
                "yaw": -103.54162669383389,
                "text": "Heinolan heinäsaari",
                "URL": "https://www.visitheinasaari.fi/",
                "cssClass": "jumpTo"
            },
            {
                ...vesitorni,
                pitch: 8.15483290253405,
                yaw: -147.14913589710366,
            },
            {
                ...satama,
                pitch: 3.2382141881024453,
                yaw: 3.201530189388855,
            }
        ]
    },
    {
        index: 2,
        image: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/satama-md.jpg",
        preview: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/satama-sm.jpeg",
        pitch: -15,
        yaw: 60,
        hfov: 110,
        autoRotate: 5,
        title: "Heinolan satama",
        hotspots: [
            {
                type: "info",
                pitch: -32.397136263831705,
                yaw: -103.54162669383389,
                text: "Heinolan heinäsaari",
                URL: "https://www.visitheinasaari.fi/",
                cssClass: "jumpTo"
            },
            {
                ...vesitorni,
                pitch: 2.3729837407950765,
                yaw: 16.96909355714521,
            },
            {
                ...tori,
                pitch: -6.367528536663143,
                yaw: -4.797731661839407,
            }
        ]
    },
    {
        index: 3,
        image: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/lintutarha-md.jpeg",
        preview: "https://heinolan-kaupunki.s3.eu-west-1.amazonaws.com/pictures/360/lintutarha-sm.jpeg",
        pitch: -15,
        yaw: 60,
        hfov: 110,
        autoRotate: 5,
        title: "Heinolan lintutarha",
        hotspots: [
            {
                ...vesitorni,
                pitch: 2.7094831885623947,
                yaw: -165.25638191882962,
            },
            {
                ...tori,
                pitch: -5.71328042792635,
                yaw: -107.3537581003262,
            },
            {
                ...satama,
                pitch: 1.7199136362460654,
                yaw: -117.15027383649489,
            }
        ]
    }
]

export default data


export interface IPannelum {
    index: number
    image: string
    preview?: string
    pitch: number
    yaw: number
    hfov: number
    autoRotate: number
    hotspotDebug?: boolean
    showControls?: boolean
    author?: string
    title: string
    hotspots: IHotSpot[]
    // uiText?: IUiText
}

interface IHotSpot {
    type: "info" | "custom"
    pitch: number
    yaw: number
    text: string
    URL?: string
    cssClass: string
    handleClickArg?: object
    tooltipArg?: object
}

export interface IUiText {
    loadButtonLabel?: string // "Click to<br>Load<br>Panorama",
    loadingLabel?: string // "Loading...",
    bylineLabel?: string // "by %s",
    noPanoramaError?: string // "No panorama image was specified.",
    fileAccessError?: string // "The file %s could not be accessed.",
    malformedURLError?: string // "There is something wrong with the panorama URL.",
    iOS8WebGLError?: string // "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
    genericWebGLError?: string // "Your browser does not have the necessary WebGL support to display this panorama.",
    textureSizeError?: string //  "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
    unknownError?: string // "Unknown error. Check developer console."
}