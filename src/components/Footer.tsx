import { AppBar, Box, Link, Stack, Toolbar, Typography } from "@mui/material";
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
            {/* rawg */}
            <Box>
              <Typography variant="subtitle1">
                All Data Provided by {""}
                <Link
                  alignItems={"center"}
                  justifyContent={"center"}
                  className="font-bold text-blue-400  decoration-blue-400"
                >
                  <a
                    href="https://rawg.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RAWG
                  </a>
                </Link>
              </Typography>
            </Box>

            {/* github */}

            <Box>
              <a
                href="https://github.com/Leo-Cata/rawg-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 hover:text-blue-400 hover:underline "
              >
                <FaGithub size="20" />
                <Typography variant="subtitle1">Github Repository</Typography>
              </a>
            </Box>

            {/* linkedIn */}

            <Box>
              <a
                href="https://www.linkedin.com/in/leonel-cata/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-2 hover:text-blue-400 hover:underline "
              >
                <FaLinkedin size="20" />
                <Typography variant="subtitle1">
                  Connect With Me on LinkedIn
                </Typography>
              </a>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;