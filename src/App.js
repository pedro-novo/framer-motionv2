import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";

const list = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

function App() {
  return (
    <Box
      height='100vh'
      display='flex'
      alignItems='center'
      alignContent='center'
      justifyContent='center'
      component={motion.div}
      variants={list}
      initial='hidden'
      animate='visible'
    >
      Framer Motion V2
      <List>
        <ListItem component={motion.li} variants={item}>
          Ola
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          Hello
        </ListItem>
        <ListItem component={motion.li} variants={item}>
          Sex
        </ListItem>
      </List>
    </Box>
  );
}

export default App;
