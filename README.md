# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Pecan: 29** (2022/05/04)  [week high: 51, month: 60]
- **Grass: 2** (2022/05/04)  [week high: 33, month: 76]
- **Mold: 3292** (2022/05/04)  [week high: 20027, month: 22243]
- **Mulberry: 2** (2022/05/04)  [week high: 8, month: 52]
- **Oak: 10** (2022/05/04)  [week high: 121, month: 6711]
- **Other: 2** (2022/05/04)  [week high: 8, month: 30]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
