import { Image, Box, HStack, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlideshow } from "../hooks/useSlidshow";

function Slideshow({ images, delay }) {
  const image = useSlideshow(images, delay);

  return (
    <Box w="20rem">
      <AnimatePresence initial={false}>
        <motion.img
          key={image}
          src={image}
          style={{
            width: "20rem",
            height: "10rem",
            position: "absolute",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
        />
      </AnimatePresence>
    </Box>
  );

  // return (
  //   <Box h="300px">
  //     {images.map((slide, i) => (
  //       <AnimatePresence>
  //         <HStack w="100%" justify="center" align="center">
  //           {i === index && (
  //             <motion.div
  //               layout
  //               key={index}
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{
  //                 duration: 3,
  //                 ease: "easeInOut",
  //               }}
  //             >
  //               <motion.div layoutId={index.toString()}>
  //                 <Image src={slide} />
  //               </motion.div>
  //             </motion.div>
  //           )}
  //         </HStack>
  //       </AnimatePresence>
  //     ))}
  //   </Box>
  // );
}

export { Slideshow };