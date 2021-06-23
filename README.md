# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 2** (2021/06/23)  [week high: 11, month: 18]
- **Mold: 3159** (2021/06/23)  [week high: 8884, month: 50165]
- **Other: 1** (2021/06/23)  [week high: 1, month: 6]
- **Pigweed: 1** (2021/06/23)  [week high: 1, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
