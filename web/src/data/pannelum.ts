// @ts-ignore
import nuoli from '../components/icon/nuoli.png'


const data: IPannelum[] = [
    {
        "index": 0,
        "image": "https://live.staticflickr.com/8130/30256395731_4f0c6044b7_b.jpg",
        "pitch": -15,
        "yaw": 60,
        "hfov": 110,
        "autoRotate": 5,
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
                handleClickArg: { index: 1 },
                tooltipArg: { "name": "Keskusta", "imageUrl": nuoli },
                cssClass: "jumpTo"
            }
        ]
    },
    {
        "index": 1,
        "image": "https://live.staticflickr.com/8130/30256395731_4f0c6044b7_b.jpg",
        "pitch": -15,
        "yaw": 60,
        "hfov": 110,
        "autoRotate": 10,
        "hotspotDebug": false,
        "showControls": false,
        "author": "Heinolan kaupunki",
        "title": "Heinolan satama",
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
    pitch: number
    yaw: number
    hfov: number
    autoRotate: number
    hotspotDebug: boolean
    showControls: boolean
    author: string
    title: string
    hotspots: IHotSpot[]
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