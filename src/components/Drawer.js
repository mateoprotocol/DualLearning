import React from 'react';
import { motion } from "motion/react"

const Drawer = ({ show, content, dimensions }) => {
    const props = {
        left: show ? 0: window.innerWidth,
        position: "absolute",
        top: 150,
        width: window.innerWidth,
        overflow: 'hidden'
    }

    return (
        <motion.div layout style={props}>
            {content}
        </motion.div>
    );
};

export default Drawer;