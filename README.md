# Exercise: testingMinesweep

[![Testing](https://github.com/sfruzsi/testingMinesweep/actions/workflows/test.yml/badge.svg)](https://github.com/sfruzsi/testingMinesweep/actions/workflows/test.yml) [![Linting](https://github.com/sfruzsi/testingMinesweep/actions/workflows/lint.yml/badge.svg)](https://github.com/sfruzsi/testingMinesweep/actions/workflows/lint.yml) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_testingMinesweep&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sfruzsi_testingMinesweep) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_testingMinesweep&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=sfruzsi_testingMinesweep)

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

> As a player I want a board and 0 < x < 9 mines So that I can play the game

- Scenario 1: Given the board is 3x3 When I start the game Then I see a 3x3 board
- Scenario 2: Given the board is 3x3 When I start the game Then I have more than 1 mine but less than 9 and the numbers in the surrounding cells

## User story 2

> As a player I want to make the first move So that I can end the game or know how much mines are where I clicked

- Given the board has mines When I click on the mine Then the game ends
- Given the board has mines When I click on the mine Then the board reveals the mine I clicked on
- Given the board has mines When I click on a non-mine Then the board reveals the number of mines

## User story 3

> As a player I want to make my second move So that I can continue the game

- Given the board has mines When I click first on a non-mine then a mine Then both should appear on the board

## User Story 4

> As a player I want to flag the bombs so that I can plan my moves

- Given a board with mines When I flag a cell Then the \* will appear on the board

## User story 5

> As a player I want the cells next to the 0 I clicked on to open So that I can solve the game

- Given a board When I click on a cell with no bomb in the viscinity Then the cells will open next to it
