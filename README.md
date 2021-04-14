# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 29** (2021/04/14)  [week high: 29, month: 29]
- **Oak: 296** (2021/04/14)  [week high: 1974, month: 2303]
- **Mulberry: 40** (2021/04/14)  [week high: 40, month: 98]
- **Mold: 5961** (2021/04/14)  [week high: 5961, month: 21400]
- **Other: 10** (2021/04/14)  [week high: 12, month: 52]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
