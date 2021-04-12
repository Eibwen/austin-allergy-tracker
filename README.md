# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 494** (2021/04/12)  [week high: 2303, month: 2303]
- **Grass: 9** (2021/04/12)  [week high: 9, month: 9]
- **Mold: 2566** (2021/04/12)  [week high: 2566, month: 21400]
- **Mulberry: 8** (2021/04/12)  [week high: 31, month: 98]
- **Other: 8** (2021/04/12)  [week high: 20, month: 52]
- **Pecan: 4** (2021/04/12)  [week high: 4, month: 4]
- **Pigweed: 1** (2021/04/12)  [week high: 1, month: 1]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
