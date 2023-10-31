"use client";

import { createStyles, Header, Group, Box, rem, Image } from "@mantine/core";

import { ColorSchemeToggle } from "../components/ToggleColorScheme";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    fontWeight: 500,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMegaMenu() {
  const { classes, theme } = useStyles();

  return (
    <Box pb={40}>
      <Header height={60} px="md" withBorder={false}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Group position="left" classNames={classes.hiddenMobile}>
            {theme.colorScheme === "dark" ? (
              <Image
                maw={120}
                src="/logo-text-darkmode.svg"
                alt="Darkmode Qoaba logo with text"
              />
            ) : (
              <Image
                maw={120}
                src="./logo-text-lightmode.svg"
                alt="Lightmode Qoaba logo with text"
              />
            )}

            <a href="../questions" className={classes.link}>
              Questions
            </a>
            <a href="#" className={classes.link}>
              Analysis
            </a>
            <a href="#" className={classes.link}>
              Pricing
            </a>
          </Group>

          <Group position="right" classNames={classes.hiddenMobile}>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
