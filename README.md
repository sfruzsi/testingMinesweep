# Exercise: testingMinesweep

[![Testing](https://github.com/sfruzsi/testingMinesweep/actions/workflows/test.yml/badge.svg)](https://github.com/sfruzsitestingMinesweep/actions/workflows/test.yml) [![Linting](https://github.com/sfruzsi/testingMinesweep/actions/workflows/lint.yml/badge.svg)](https://github.com/sfruzsi/testingMinesweep/actions/workflows/lint.yml) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_testingMinesweep&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sfruzsi_testingMinesweep) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_testingMinesweep&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=sfruzsi_testingMinesweep)

## Mine Sweeper - Game Rules:

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.
Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.
The first square you open could be a bomb.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

## User story 1

> As a player I want a board and at least 1 mine So that I can play the game

- Scenario 1: Given the board is 3x3 When I start the game Then I see a 3x3 board
- Scenario 2: Given the board is 3x3 When I start the game Then I have more than 1 mine but less than 9 and the numbers in the surrounding cells
- Scenario 3: Given the board is 3x3 When I start the game Then the cells are hidden from the player

## User story 2

> As a ...
