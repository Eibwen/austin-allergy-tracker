# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1645** (2021/04/08)  [week high: 2303, month: 2303]
- **Cottonwood: 20** (2021/04/08)  [week high: 41, month: 41]
- **Mulberry: 16** (2021/04/08)  [week high: 72, month: 98]
- **Ash: 10** (2021/04/08)  [week high: 26, month: 66]
- **Grass: 4** (2021/04/08)  [week high: 6, month: 6]
- **Mold: 1012** (2021/04/08)  [week high: 3166, month: 21400]
- **Other: 12** (2021/04/08)  [week high: 52, month: 52]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
