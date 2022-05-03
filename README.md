# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 5** (2022/05/03)  [week high: 76, month: 76]
- **Mold: 7173** (2022/05/03)  [week high: 20027, month: 22243]
- **Oak: 22** (2022/05/03)  [week high: 361, month: 6711]
- **Pecan: 32** (2022/05/03)  [week high: 51, month: 60]
- **Hackberry: 2** (2022/05/03)  [week high: 2, month: 90]
- **Mulberry: 2** (2022/05/03)  [week high: 8, month: 52]
- **Other: 4** (2022/05/03)  [week high: 8, month: 30]
- **Pine: 2** (2022/05/03)  [week high: 12, month: 12]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
