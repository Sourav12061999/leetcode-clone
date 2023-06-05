import React, { ReactNode } from "react";
import {
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Divider,
  UnstyledButton,
  Box,
  Center,
  Group,
  Button,
} from "@mantine/core";
import { useStyles } from "../styles";
import { BsChevronDown } from "react-icons/bs";

type PropTypes = {
  closeDrawer: () => void;
  drawerOpened: boolean;
  toggleLinks: () => void;
  linksOpened: boolean;
  children: ReactNode;
};
function NavDraw({
  closeDrawer,
  drawerOpened,
  toggleLinks,
  linksOpened,
  children,
}: PropTypes) {
  const { classes, theme } = useStyles();
  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Navigation"
      className={classes.hiddenDesktop}
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <a href="#" className={classes.link}>
          Home
        </a>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <BsChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{children}</Collapse>
        <a href="#" className={classes.link}>
          Learn
        </a>
        <a href="#" className={classes.link}>
          Academy
        </a>

        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <Group position="center" grow pb="xl" px="md">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </ScrollArea>
    </Drawer>
  );
}

export default NavDraw;
