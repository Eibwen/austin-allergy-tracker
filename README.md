# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 49** (2021/04/19)  [week high: 49, month: 49]
- **Mold: 14741** (2021/04/19)  [week high: 14741, month: 21400]
- **Oak: 49** (2021/04/19)  [week high: 296, month: 2303]
- **Ash: 2** (2021/04/19)  [week high: 2, month: 66]
- **Mulberry: 8** (2021/04/19)  [week high: 40, month: 98]
- **Other: 7** (2021/04/19)  [week high: 20, month: 52]
- **Pecan: 2** (2021/04/19)  [week high: 5, month: 5]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
