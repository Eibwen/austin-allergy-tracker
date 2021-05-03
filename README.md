# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 26257** (2021/05/03)  [week high: 26257, month: 26257]
- **Pecan: 30** (2021/05/03)  [week high: 70, month: 70]
- **Grass: 4** (2021/05/03)  [week high: 33, month: 58]
- **Mulberry: 3** (2021/05/03)  [week high: 4, month: 40]
- **Other: 3** (2021/05/03)  [week high: 4, month: 20]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
