// mui component
import { AppBar, Divider, Toolbar } from "@mui/material";
import Socials from "./Socials";
import Credits from "./Credits";

const Footer = () => {
  return (
    <AppBar position="static" component={"footer"}>
      <Toolbar className="flex flex-col py-8">
        <Socials />
        <Divider className="my-6 w-full sm:my-12" />
        <Credits />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
