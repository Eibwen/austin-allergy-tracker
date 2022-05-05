# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 6** (2022/05/05)  [week high: 26, month: 76]
- **Pecan: 27** (2022/05/05)  [week high: 51, month: 60]
- **Hackberry: 2** (2022/05/05)  [week high: 2, month: 62]
- **Mold: 3899** (2022/05/05)  [week high: 7173, month: 22243]
- **Mulberry: 6** (2022/05/05)  [week high: 6, month: 52]
- **Oak: 6** (2022/05/05)  [week high: 48, month: 6711]
- **Other: 2** (2022/05/05)  [week high: 8, month: 30]
- **Pine: 2** (2022/05/05)  [week high: 6, month: 12]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
