# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1612** (2021/04/06)  [week high: 1820, month: 2007]
- **Ash: 26** (2021/04/06)  [week high: 60, month: 66]
- **Cottonwood: 41** (2021/04/06)  [week high: 41, month: 41]
- **Mulberry: 31** (2021/04/06)  [week high: 98, month: 98]
- **Other: 20** (2021/04/06)  [week high: 52, month: 52]
- **Grass: 4** (2021/04/06)  [week high: 6, month: 6]
- **Mold: 676** (2021/04/06)  [week high: 3910, month: 21400]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
