# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1875** (2022/03/31)  [week high: 1875, month: 1875]
- **Ash: 10** (2022/03/31)  [week high: 20, month: 35]
- **Elm: 3** (2022/03/31)  [week high: 3, month: 67]
- **Grass: 2** (2022/03/31)  [week high: 4, month: 4]
- **Hackberry: 6** (2022/03/31)  [week high: 10, month: 10]
- **Mold: 1562** (2022/03/31)  [week high: 6687, month: 50615]
- **Mulberry: 6** (2022/03/31)  [week high: 6, month: 6]
- **Other: 10** (2022/03/31)  [week high: 10, month: 10]
- **Pine: 1** (2022/03/31)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
