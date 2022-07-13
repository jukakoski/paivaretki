import React from 'react'
import Loadable from "@loadable/component"

const LoadablePannelum = Loadable(() => import("./Pannelumeri"))

export default LoadablePannelum