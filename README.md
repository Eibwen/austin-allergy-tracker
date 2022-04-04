# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1549** (2022/04/04)  [week high: 1875, month: 1875]
- **Hackberry: 33** (2022/04/04)  [week high: 33, month: 33]
- **Ash: 12** (2022/04/04)  [week high: 18, month: 35]
- **Grass: 1** (2022/04/04)  [week high: 4, month: 4]
- **Mold: 2166** (2022/04/04)  [week high: 6687, month: 50615]
- **Mulberry: 6** (2022/04/04)  [week high: 8, month: 8]
- **Other: 12** (2022/04/04)  [week high: 12, month: 12]
- **Pine: 1** (2022/04/04)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
