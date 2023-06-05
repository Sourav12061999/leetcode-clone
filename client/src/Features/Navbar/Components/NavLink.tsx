import React from "react";
import { UnstyledButton, Group, rem, ThemeIcon, Text } from "@mantine/core";
import { useStyles } from "../styles";
import { LinkTypes } from "../index.types";
import { Link } from "react-router-dom";

type PropTypes = {
  item: LinkTypes;
};
function NavLink({ item }: PropTypes) {
  const { classes, theme } = useStyles();
  return (
    <Link to={item.link || "/"}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export default NavLink;
