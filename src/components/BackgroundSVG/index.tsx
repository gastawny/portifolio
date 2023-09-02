import { GeometricShapesSVG as SVG } from './GeometricShapesSVG'
import { UpDown } from './GeometricShapesSVG/Animations'

const hiddenlowHeight = 1000
const hiddenMediumHeight = 2000

export function BackGroundSVG() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <UpDown type="normal">
        <SVG icon="triangle" width={4 * 48} stroke left="30%" top="30%" />
        <SVG icon="hexa" width={4 * 48} stroke left="65%" top="95%" />
        <SVG icon="hexa" width={4 * 48} stroke left="10%" top="5%" />
        <SVG icon="box" width={4 * 28} stroke left="85%" top="80%" hiddenMediumHeight />
        <SVG icon="hexa" width={4 * 28} stroke left="5%" top="40%" hiddenlowHeight />
        <SVG icon="box" width={4 * 16} left="90%" top="10%" />
      </UpDown>
      <UpDown type="wide">
        <SVG icon="triangle" width={4 * 24} stroke left="65%" top="8%" />
        <SVG icon="triangle" width={4 * 16} stroke left="90%" top="60%" hiddenMediumHeight />
        <SVG icon="triangle" width={4 * 16} stroke left="40%" top="70%" hiddenlowHeight />
        <SVG icon="triangle" width={4 * 20} stroke left="70%" top="50%" />
        <SVG icon="triangle" width={4 * 20} stroke left="90%" top="45%" />
      </UpDown>
      <UpDown type="slow">
        <SVG icon="box" width={4 * 16} stroke left="30%" top="0%" />
        <SVG icon="box" width={4 * 16} stroke left="10%" top="90%" />
        <SVG icon="circle" width={4 * 20} left="85%" top="25%" hiddenMediumHeight />
        <SVG icon="circle" width={4 * 20} left="65%" top="45%" hiddenlowHeight />
        <SVG icon="circle" stroke width={4 * 24} left="5%" top="70%" />
        <SVG icon="circle" width={4 * 6} left="4%" top="20%" />
        <SVG icon="circle" width={4 * 12} left="50%" top="60%" />
      </UpDown>
    </div>
  )
}
