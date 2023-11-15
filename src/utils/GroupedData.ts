// type
import { GameData } from "../Types/Types";

const groupData = (
  gameData: GameData[] | undefined,
  numberOfGroups: number,
) => {
  const groupedData = [];
  if (gameData) {
    for (let i = 0; i < numberOfGroups; i++) {
      const group = [];
      for (let j = i; j < gameData.length; j += numberOfGroups) {
        group.push(gameData[j]);
      }
      groupedData.push(group);
    }
  }
  return groupedData;
};

export default groupData;
