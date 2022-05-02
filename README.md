# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 33** (2022/05/02)  [week high: 361, month: 6711]
- **Grass: 2** (2022/05/02)  [week high: 76, month: 76]
- **Mold: 2336** (2022/05/02)  [week high: 22243, month: 22243]
- **Mulberry: 6** (2022/05/02)  [week high: 8, month: 52]
- **Other: 4** (2022/05/02)  [week high: 8, month: 30]
- **Pecan: 12** (2022/05/02)  [week high: 51, month: 60]
- **Pine: 2** (2022/05/02)  [week high: 12, month: 12]
- **Walnut: 2** (2022/05/02)  [week high: 2, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
