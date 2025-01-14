import React from "react";
import StandardGame from "../components/Standard";
import { useGameSettings } from "../../../contexts/GameSettings";
import { Box, Card, Grid, Typography } from "@mui/material";
import MissedSequences from "../../stats/components/MissedSequences";
import StatKeyboard from "../../stats/components/StatKeyboard";
import PracticeBox from "../components/standardComponents/PracticeBox";
import useRaceLogic from "../RaceLogic";
import Results from "../components/results/Results";
import HomeProfile from "../../profile/display/HomeProfile";
import TopSettings from "../components/standardComponents/TopSettings";
import Settings from "../components/standardComponents/Settings";

export default function SoloGame() {
  const { gameSettings } = useGameSettings();

  const { isPractice, practiceStrings } = gameSettings.gameInfo.practice;

  return (
    <>
      <Grid item xs={1.5}>
        <Box mt={12}>
          {gameSettings.display.showProfile ? <HomeProfile /> : null}
        </Box>
      </Grid>
      <Grid item xs={7.5}>
        <Grid container spacing={3}>
          <StandardGame
            settings={gameSettings}
            testDisabled={isPractice && practiceStrings.length === 0}
          />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Box mt={0}>
          <Settings />
        </Box>
      </Grid>
      {isPractice ? <PracticeBox /> : null}
    </>
  );
}
