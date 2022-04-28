# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 33** (2022/04/28)  [week high: 76, month: 76]
- **Mold: 20027** (2022/04/28)  [week high: 22243, month: 22243]
- **Oak: 121** (2022/04/28)  [week high: 658, month: 6711]
- **Pecan: 41** (2022/04/28)  [week high: 60, month: 60]
- **Mulberry: 8** (2022/04/28)  [week high: 8, month: 52]
- **Other: 5** (2022/04/28)  [week high: 14, month: 30]
- **Pine: 4** (2022/04/28)  [week high: 12, month: 12]
- **Walnut: 2** (2022/04/28)  [week high: 2, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
