# RockPaperScissors-V1
 Rock Paper Scissors Game using Javascript 
# 🪨📄✂️ Rock Paper Scissors Game

A modern, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. Features dynamic UI updates, game animations, and a celebratory confetti effect when you win!

![Game Screenshot](./screenshot.png) *(Add your own screenshot later)*

## ✨ Features

- **Interactive Gameplay**: Click buttons to make your selection
- **Instant Results**: Computer randomly chooses and results display immediately
- **Visual Feedback**:
  - 3D-style buttons with hover effects
  - Celebration confetti animation on wins
  - Clean reset after each round
- **Responsive Design**: Works on all device sizes
- **Gamified UI**:
  - Thematic background with RPS icons
  - Comic-style typography
  - Colorful interface

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (Flexbox, Animations)
  - JavaScript (DOM Manipulation)
- **Fonts**: [Comic Neue](https://fonts.google.com/specimen/Comic+Neue)
- **Icons**: Emoji characters (✊✋✌️)

## 🚀 How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rock-paper-scissors.git
   cd rock-paper-scissors


## 🎮 Game Logic

### 🔄 Basic Rules
The game follows standard Rock Paper Scissors mechanics with these win conditions:
```
✊ Rock crushes ✌️ Scissors
✋ Paper covers ✊ Rock
✌️ Scissors cut ✋ Paper
Same choice = Draw
```

## 📊 Win Conditions Table

| Player Choice | Computer Choice | Result    | Animation  |
|---------------|-----------------|-----------|------------|
| ✊ Rock        | ✌️ Scissors     | You Win!  | 🎉 Confetti |
| ✋ Paper       | ✊ Rock          | You Win!  | 🎉 Confetti |
| ✌️ Scissors    | ✋ Paper         | You Win!  | 🎉 Confetti |
| ✊ Rock        | ✋ Paper         | You Lose! | -          |
| ✋ Paper       | ✌️ Scissors     | You Lose! | -          |
| ✌️ Scissors    | ✊ Rock          | You Lose! | -          |
| Any           | Same Choice     | Draw!     | -          |


## 🤝 How to Contribute

We welcome contributions from everyone! Here's how you can help improve this project:

### 🛠️ Development Setup
1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/SuvraneelSaha/RockPaperScissors-V1.git
   cd rock-paper-scissors


# 🚀 Contribution Guide

## 🛠️ Areas Needing Help

### 🐛 Bug Fixes
| Issue Type       | Examples                          | Priority |
|------------------|-----------------------------------|----------|
| Game Logic       | Win conditions not working        | High     |
| UI Glitches      | Mobile responsiveness issues      | Medium   |
| Performance      | Memory leaks in animations        | High     |

### ✨ Feature Development
| Feature Area     | Specific Tasks                    | Difficulty |
|------------------|-----------------------------------|------------|
| Game Modes       | Add "Best of 3" tournament mode   | Medium     |
| User Experience  | Add sound effects                 | Low        |
| Analytics        | Track win/loss statistics         | High       |

## 💡 Suggested Improvements

### 🎮 Gameplay Enhancements
```mermaid
graph TD
    A[Add Score System] --> B[Implement Local Storage]
    B --> C[Create Leaderboard]
    D[New Gestures] --> E[Lizard/Spock Mode]