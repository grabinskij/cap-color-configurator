import {AnimatePresence, motion} from 'framer-motion';
import {slideAnimation} from '../config/motion';
import ColorPicker from "../components/ColorPicker";


const Customizer = () => {
    return (
        <AnimatePresence>
            <div>
            <motion.div
                key="custom"
                {...slideAnimation('top')}
            >
                <div className="
                absolute
                z-10
                lg:top-1/2 lg:left-0 lg:ml-28 lg:mt-32 lg:-translate-y-1/2 lg:-mt-12
                transform
                -translate-x-1/2
                left-1/2
                top-0"
                >
                    <div className=" bg-stone-500 flex items-center">
                        <ColorPicker />
                    </div>
                </div>
            </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Customizer