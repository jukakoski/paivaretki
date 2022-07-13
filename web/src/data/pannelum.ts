// @ts-ignore
import nuoli from '../components/icon/nuoli.png'


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
        "author": "Heinolan kaupunki",
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
                type: "custom",
                pitch: 5.276079238692603,
                yaw: -99.97434903167009,
                text: "Keskusta",
                handleClickArg: { index: 1 },
                tooltipArg: { "name": "Keskusta", "imageUrl": nuoli },
                cssClass: "jumpTo"
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
        "autoRotate": 10,
        "hotspotDebug": false,
        "showControls": false,
        "author": "Heinolan kaupunki",
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
                type: "custom",
                pitch: 5.276079238692603,
                yaw: -99.97434903167009,
                text: "Keskusta",
                handleClickArg: { index: 0 },
                tooltipArg: { "name": "Keskusta", "imageUrl": nuoli },
                cssClass: "jumpTo"
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
    hotspotDebug: boolean
    showControls: boolean
    author: string
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