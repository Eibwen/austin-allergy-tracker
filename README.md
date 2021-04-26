# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 51** (2021/04/26)  [week high: 58, month: 58]
- **Mold: 9147** (2021/04/26)  [week high: 9147, month: 14741]
- **Oak: 50** (2021/04/26)  [week high: 72, month: 2303]
- **Pecan: 66** (2021/04/26)  [week high: 66, month: 66]
- **Mulberry: 8** (2021/04/26)  [week high: 8, month: 98]
- **Other: 12** (2021/04/26)  [week high: 12, month: 52]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
