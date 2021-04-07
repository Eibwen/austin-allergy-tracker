# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 2303** (2021/04/07)  [week high: 2303, month: 2303]
- **Ash: 16** (2021/04/07)  [week high: 60, month: 66]
- **Cottonwood: 31** (2021/04/07)  [week high: 41, month: 41]
- **Mulberry: 18** (2021/04/07)  [week high: 98, month: 98]
- **Grass: 4** (2021/04/07)  [week high: 6, month: 6]
- **Mold: 1131** (2021/04/07)  [week high: 3910, month: 21400]
- **Other: 10** (2021/04/07)  [week high: 52, month: 52]
- **Walnut: 10** (2021/04/07)  [week high: 10, month: 10]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
