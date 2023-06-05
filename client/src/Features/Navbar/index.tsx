import { Header, Group, Button, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { BsBook, BsCoin, BsFingerprint } from "react-icons/bs";
import { AiFillPieChart, AiFillCodeSandboxCircle } from "react-icons/ai";
import { useStyles } from "./styles";
import NavDraw from "./Components/NavDraw";
import Features from "./Components/Features";
import { LinkTypes } from "./index.types";
import NavLink from "./Components/NavLink";
import { Link } from "react-router-dom";

const NavData: LinkTypes[] = [
  {
    icon: BiCodeBlock,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: BsCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: BsBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: BsFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: AiFillPieChart,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IoMdNotificationsOutline,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = NavData.map((item) => <NavLink item={item} />);

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <AiFillCodeSandboxCircle size={45} color={theme.fn.primaryColor()} />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Features>{links}</Features>
            <Link to="/learn" className={classes.link}>
              Learn
            </Link>
            <Link to="/academy" className={classes.link}>
              Academy
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>
      <NavDraw
        closeDrawer={closeDrawer}
        drawerOpened={drawerOpened}
        linksOpened={linksOpened}
        toggleLinks={toggleLinks}
      >
        {links}
      </NavDraw>
    </Box>
  );
}
