import BackGroundSVG from 'components/BackgroundSVG'
import Form from './Form'
import { motion } from 'framer-motion'
import './Contact.scss'

const Contact = () => (
  <motion.div
    className="Contact"
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
