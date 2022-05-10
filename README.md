# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 4** (2022/05/10)  [week high: 6, month: 76]
- **Hackberry: 1** (2022/05/10)  [week high: 2, month: 21]
- **Mold: 4016** (2022/05/10)  [week high: 6623, month: 22243]
- **Mulberry: 2** (2022/05/10)  [week high: 6, month: 18]
- **Oak: 2** (2022/05/10)  [week high: 10, month: 3971]
- **Pecan: 1** (2022/05/10)  [week high: 29, month: 60]
- **Pine: 1** (2022/05/10)  [week high: 2, month: 12]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
