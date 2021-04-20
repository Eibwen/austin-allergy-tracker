# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 52** (2021/04/20)  [week high: 52, month: 52]
- **Oak: 72** (2021/04/20)  [week high: 296, month: 2303]
- **Mold: 2777** (2021/04/20)  [week high: 14741, month: 21400]
- **Mulberry: 5** (2021/04/20)  [week high: 40, month: 98]
- **Other: 10** (2021/04/20)  [week high: 20, month: 52]
- **Pecan: 3** (2021/04/20)  [week high: 3, month: 5]
- **Walnut: 3** (2021/04/20)  [week high: 3, month: 10]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
