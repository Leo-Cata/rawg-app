// mui components
import { Link, Stack, Typography } from "@mui/material";

// react icons
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <Stack
      width={"100%"}
      className="flex flex-col justify-evenly space-y-1 sm:flex-row sm:items-end"
    >
      {/* github */}
      <Link
        href="https://github.com/Leo-Cata/rawg-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center space-x-2 text-white no-underline  hover:text-blue-400 hover:underline"
      >
        <FaGithub size="20" />
        <Typography variant="subtitle1">Github Repository</Typography>
      </Link>

      {/* linkedIn */}

      <Link
        href="https://www.linkedin.com/in/leonel-cata/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center space-x-2 text-white no-underline  hover:text-blue-400 hover:underline"
      >
        <FaLinkedin size="20" />
        <Typography variant="subtitle1">Connect With Me on LinkedIn</Typography>
      </Link>
    </Stack>
  );
};

export default Socials;
