# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 3455** (2022/04/11)  [week high: 6711, month: 6711]
- **Hackberry: 21** (2022/04/11)  [week high: 90, month: 90]
- **Mulberry: 18** (2022/04/11)  [week high: 52, month: 52]
- **Other: 20** (2022/04/11)  [week high: 30, month: 30]
- **Pecan: 51** (2022/04/11)  [week high: 51, month: 51]
- **Grass: 2** (2022/04/11)  [week high: 2, month: 4]
- **Mold: 1361** (2022/04/11)  [week high: 2361, month: 50615]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
