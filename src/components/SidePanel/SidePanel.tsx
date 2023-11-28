// // mui components
// import {
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Paper,
//   Stack,
//   Typography,
// } from "@mui/material";

// // context and state
// import { useContext, useState } from "react";
// import { appContext } from "../../context/appContext";

// // types
// import { SidePanelProps, appContextValues } from "../../Types/Types";

// //arrow icon
// import { IoMdArrowDropup } from "react-icons/io";

// const SidePanel = ({ sidePanelProps }: { sidePanelProps: SidePanelProps }) => {
//   //app context
//   const { setSearchGenres, searchGenres, searchDates, setSearchDates } =
//     useContext(appContext) as appContextValues;

//   const handleSelector = (value: number) => {
//     //check if its a number or a string
//     if (typeof value === "number") {
//       //if its a number, sets states for the genre
//       if (value === sidePanelProps.id) {
//         setSearchGenres(undefined);
//       } else {
//         setSearchGenres(value);
//       }
//     } else if (typeof value === "string") {
//       //else if its a string, sets states for the dates
//       if (value === sidePanelProps.name) {
//         setSearchDates(undefined);
//       } else {
//         setSearchDates(sidePanelProps.name);
//       }
//     }
//   };

//   return <div>SidePanel</div>;
// };

// export default SidePanel;
