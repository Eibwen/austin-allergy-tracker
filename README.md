# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 0** (2022/05/06)  [week high: 6, month: 76]
- **Hackberry: 2** (2022/05/06)  [week high: 2, month: 62]
- **Mold: 6623** (2022/05/06)  [week high: 7173, month: 22243]
- **Oak: 2** (2022/05/06)  [week high: 33, month: 6711]
- **Other: 6** (2022/05/06)  [week high: 6, month: 30]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
