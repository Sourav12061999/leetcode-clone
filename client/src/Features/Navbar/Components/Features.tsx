import React, { ReactNode } from "react";
import {
  HoverCard,
  Box,
  Center,
  Text,
  Group,
  Anchor,
  Divider,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { useStyles } from "../styles";
import { BsChevronDown } from "react-icons/bs";

type PropTypes = {
  children: ReactNode;
};

function Features({ children }: PropTypes) {
  const { classes, theme } = useStyles();
  return (
    <HoverCard
      width={600}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCard.Target>
        <Center inline>
          <Box component="span" mr={5}>
            Features
          </Box>
          <BsChevronDown size={16} color={theme.fn.primaryColor()} />
        </Center>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
        <Group position="apart" px="md">
          <Text fw={500}>Features</Text>
          <Anchor href="#" fz="xs">
            View all
          </Anchor>
        </Group>

        <Divider
          my="sm"
          mx="-md"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <SimpleGrid cols={2} spacing={0}>
          {children}
        </SimpleGrid>

        <div className={classes.dropdownFooter}>
          <Group position="apart">
            <div>
              <Text fw={500} fz="sm">
                Get started
              </Text>
              <Text size="xs" color="dimmed">
                Their food sources have decreased, and their numbers
              </Text>
            </div>
            <Button variant="default">Get started</Button>
          </Group>
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default Features;
