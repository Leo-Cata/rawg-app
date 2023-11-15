// mui components
import { Stack, Typography, Tooltip } from "@mui/material";

// zoom animation for the tooltips
import Zoom from "@mui/material/Zoom";

// platforms icons
import {
  SiAndroid,
  SiApple,
  SiAtari,
  SiGooglechrome,
  SiIos,
  SiLinux,
  SiNintendo,
  SiPlaystation,
  SiSega,
  SiWindows10,
  SiXbox,
} from "react-icons/si";
import { Platforms, PlatformsIcons } from "../../Types/Types";

const CardsPlatforms = ({
  parent_platforms,
}: {
  parent_platforms: Platforms[];
}) => {
  // to show icon according to available platform
  const platformsIcons: PlatformsIcons = {
    pc: <SiWindows10 />,
    playstation: <SiPlaystation size="16px" />,
    xbox: <SiXbox />,
    ios: <SiIos />,
    android: <SiAndroid />,
    mac: <SiApple />,
    nintendo: <SiNintendo />,
    atari: <SiAtari />,
    sega: <SiSega />,
    web: <SiGooglechrome />,
    linux: <SiLinux size="17px" />,
  };

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      className="w-fit space-x-2"
      alignItems={"flex-end"}
    >
      {parent_platforms.map((platforms) => (
        <Tooltip
          title={platforms.platform.name}
          key={platforms.platform.name}
          placement="top"
          TransitionComponent={Zoom}
          arrow
        >
          <Typography className="text-sm">
            {platformsIcons[platforms.platform.slug]}
          </Typography>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default CardsPlatforms;
