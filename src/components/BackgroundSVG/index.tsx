import { useEffect, useState } from 'react'
import SVG from './GeometricShapesSVG'
import UpDown from './GeometricShapesSVG/Animations'

const BackGroundSVG = () => {
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(document.body.scrollHeight)
    }, [])
    const hiddenlowHeight = 1000
    const hiddenMediumHeight = 2000

    return (
        height ?
            <>
                <UpDown type="normal">
                    <SVG icon="triangle" width={4 * 48} stroke left="30%" top="30%" />
                    <SVG icon="hexa" width={4 * 48} stroke left="65%" top="95%" />
                    <SVG icon="hexa" width={4 * 48} stroke left="10%" top="5%" />
                    <SVG icon="box" width={4 * 28} stroke left="85%" top="80%" hidden={hiddenlowHeight > height || hiddenMediumHeight > height ? true : false} />
                    <SVG icon="hexa" width={4 * 28} stroke left="5%" top="40%" hidden={hiddenlowHeight > height ? true : false} />
                    <SVG icon="box" width={4 * 16} left="90%" top="10%" />
                </UpDown>
                <UpDown type="wide">
                    <SVG icon="triangle" width={4 * 24} stroke left="65%" top="8%" />
                    <SVG icon="triangle" width={4 * 16} stroke left="90%" top="60%" hidden={hiddenlowHeight > height || hiddenMediumHeight > height ? true : false} />
                    <SVG icon="triangle" width={4 * 16} stroke left="40%" top="70%" hidden={hiddenlowHeight > height ? true : false} />
                    <SVG icon="triangle" width={4 * 20} stroke left="70%" top="50%" />
                    <SVG icon="triangle" width={4 * 20} stroke left="90%" top="45%" />
                </UpDown>
                <UpDown type="slow">
                    <SVG icon="box" width={4 * 16} stroke left="30%" top="0%" />
                    <SVG icon="box" width={4 * 16} stroke left="10%" top="90%" />
                    <SVG icon="circle" width={4 * 20} left="85%" top="25%" hidden={hiddenlowHeight > height || hiddenMediumHeight > height ? true : false} />
                    <SVG icon="circle" width={4 * 20} left="65%" top="45%" hidden={hiddenlowHeight > height ? true : false} />
                    <SVG icon="circle" stroke width={4 * 24} left="5%" top="70%" />
                    <SVG icon="circle" width={4 * 6} left="4%" top="20%" />
                    <SVG icon="circle" width={4 * 12} left="50%" top="60%" />
                </UpDown>
            </>
            : <></>
    )
}

export default BackGroundSVG