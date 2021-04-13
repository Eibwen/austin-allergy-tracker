# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 148** (2021/04/13)  [week high: 2303, month: 2303]
- **Grass: 18** (2021/04/13)  [week high: 18, month: 18]
- **Mold: 3361** (2021/04/13)  [week high: 3361, month: 21400]
- **Mulberry: 7** (2021/04/13)  [week high: 18, month: 98]
- **Other: 7** (2021/04/13)  [week high: 12, month: 52]
- **Pecan: 5** (2021/04/13)  [week high: 5, month: 5]
- **Walnut: 6** (2021/04/13)  [week high: 10, month: 10]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
