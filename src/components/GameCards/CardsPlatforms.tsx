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
  availablePlatforms,
}: {
  availablePlatforms: Platforms[];
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
    <Stack direction={"row"} flexWrap={"wrap"} className="mb-1 space-x-2">
      {availablePlatforms.map((platforms) => (
        <Tooltip
          title={platforms.platform.slug}
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
