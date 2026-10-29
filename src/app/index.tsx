import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const COLORS = {
  background: "#FFFFFF",
  surfaace: "#F8FAFC",
  text: "#1E293B",
  secondaryText: "#64748B",
  border: "#E2E8F0",
  rock: "#EF4444",
  paper: "#0D9488",
  scissors: "#D97706",
  vs: "#6366F1",
  win: "#0D9488",
  draw: "#D97706",
  loss: "#EF4444",
};

const CHOICES = [
  { name: "Rock",emoji:'✊✌️🤝✋', color: COLORS.rock },
  { name: "Paper",emoji:'✋', color: COLORS.paper },
  { name: "Scissors",emoji:'✌️', color: COLORS.scissors }
];

export default function PlayScreen() {
  const [playerChoice, setPlayerChoice] = useState<(typesof CHOICES[number]) | null>(null);
  const [computerChoice, setComputerChoice] = useState<(typesof CHOICES[number]) | null>(null);
  const [result, setResult] = useState('Make your move!');
  const [resultColor, setResultColor] = useState(COLORS.text);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  const playGame = (choice: (typesof CHOICES[number])) => {
    const randomnum =(Math.floor(Math.random() * 3));
    const computerChoice = CHOICES[randomnum];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice.name === computerChoice.name) {
      setResult("It's a draw!🤝");
      setResultColor(COLORS.draw);
      setScore({ ...score, draws: score.draws + 1 });
    } else if (
      (choice.name === "Rock" && computerChoice.name === "Scissors") ||
      (choice.name === "Paper" && computerChoice.name === "Rock") ||
      (choice.name === "Scissors" && computerChoice.name === "Paper")
    ) {
      setResult("You win!🎉");
      setResultColor(COLORS.win);
      setScore({ ...score, wins: score.wins + 1 });
    } else {
      setResult("You lose!😢");
      setResultColor(COLORS.loss);
      setScore({ ...score, losses: score.losses + 1 });
    }
};
const resetGame = () => {
  setUserChoice(null);
  setComputerChoice(null);
  setResult('Make your move!');
  setResultColor(COLORS.text);
  setScore({ wins: 0, losses: 0, draws: 0 });
};

return (
  <View style={styles.container}>
    <Text style={styles.header}>RPS Showdown</Text>
    <Text style={styles.subtitle}>Rock  Paper Scissor</Text>

    <View style={Styles.scoreboard }>
    <View style={styles.scoreColumn}>
      <Text style={styles.score}>Wins: {score.wins}</Text>
      <text style={[styles.scoreValue, { color: COLORS.win }]}>{score.wins}</text>
    </View>

    <View style={styles.scoreDivider}/>

    <view style={styles.scoreColumn}>
      <Text style={styles.score}>Draws: {score.draws}</Text>
      <Text style={[styles.scoreValue, { color: COLORS.draw }]}>{score.draws}</Text>
    </View>

    <View style={styles.scoreDivider}/>  

    <View style={styles.scoreColumn}>
      <Text style={styles.score}>Losses: {score.losses}</Text>
      <Text style={[styles.scoreValue, { color: COLORS.loss }]}>{score.losses}</Text>
    </View>
    </View>

    <View style={styles.playerSection}>
      <Text style={styles.playerTitle}>YOU</Text>
      <View style={[
        styles.emogiCircle,
        userChoice && { borderColor: userChoice.color,backgroundColor: '${userChoice.color}15'}
      ]}
      >
        <Text style={styles.emogi}>{userChoice ? userChoice.emoji : "❓"}</Text>
      </View>
      </View>
      