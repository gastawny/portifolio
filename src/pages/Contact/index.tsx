import BackGroundSVG from 'components/BackgroundSVG'
import Form from './Form'
import { motion } from 'framer-motion'

const Contact = () => (
  <motion.div
    className="Home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    <BackGroundSVG />
    <Form />
  </motion.div>
)

export default Contact
