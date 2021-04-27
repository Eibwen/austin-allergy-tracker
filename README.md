# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 33** (2021/04/27)  [week high: 58, month: 58]
- **Pecan: 70** (2021/04/27)  [week high: 70, month: 70]
- **Mold: 3261** (2021/04/27)  [week high: 9147, month: 14741]
- **Mulberry: 4** (2021/04/27)  [week high: 8, month: 98]
- **Oak: 10** (2021/04/27)  [week high: 50, month: 2303]
- **Other: 4** (2021/04/27)  [week high: 12, month: 52]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
