// mui component
import { AppBar, Box, Link, Stack, Toolbar, Typography } from "@mui/material";

// react icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-8">
      <AppBar position="static">
        <Toolbar>
          {/* links */}
          <Stack
            width={"100%"}
            className="flex flex-col justify-evenly space-y-1 sm:flex-row sm:items-end"
          >
            {/* github */}

            <Box>
              <Link
                href="https://github.com/Leo-Cata/rawg-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 text-white no-underline  hover:text-blue-400 hover:underline"
              >
                <FaGithub size="20" />
                <Typography variant="subtitle1">Github Repository</Typography>
              </Link>
            </Box>

            {/* linkedIn */}

            <Box>
              <Link
                href="https://www.linkedin.com/in/leonel-cata/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 text-white no-underline  hover:text-blue-400 hover:underline"
              >
                <FaLinkedin size="20" />
                <Typography variant="subtitle1">
                  Connect With Me on LinkedIn
                </Typography>
              </Link>
            </Box>

            {/* rawg */}
            <Box>
              <Typography variant="subtitle1">
                All Data Provided by {""}
                <Link
                  alignItems={"center"}
                  justifyContent={"center"}
                  className="font-bold text-blue-400 no-underline decoration-blue-400 hover:underline"
                  href="https://rawg.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RAWG
                </Link>
              </Typography>
            </Box>

            {/* icon */}
            <Box>
              <Link
                href="https://www.flaticon.com/free-icons/lotus"
                title="lotus icons"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-row items-center space-x-2 text-white hover:text-blue-400 hover:underline"
              >
                <img src="/lotus.png" alt="lotus icon" className="w-6 pr-1 " />
                <Typography variant="subtitle1">
                  Lotus icon created by Hexagon075 - Flaticon
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
