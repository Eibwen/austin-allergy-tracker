# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 58** (2021/04/22)  [week high: 58, month: 58]
- **Oak: 30** (2021/04/22)  [week high: 72, month: 2303]
- **Mold: 2568** (2021/04/22)  [week high: 14741, month: 21400]
- **Mulberry: 6** (2021/04/22)  [week high: 8, month: 98]
- **Pecan: 2** (2021/04/22)  [week high: 3, month: 5]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
