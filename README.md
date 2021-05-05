# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 58** (2021/05/05)  [week high: 58, month: 58]
- **Mold: 11582** (2021/05/05)  [week high: 26257, month: 26257]
- **Mulberry: 2** (2021/05/05)  [week high: 6, month: 40]
- **Other: 4** (2021/05/05)  [week high: 10, month: 20]
- **Pecan: 8** (2021/05/05)  [week high: 42, month: 70]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
