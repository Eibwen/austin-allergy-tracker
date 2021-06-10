# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 6** (2021/06/10)  [week high: 6, month: 8]
- **Mold: 5534** (2021/06/10)  [week high: 50165, month: 50165]
- **Other: 1** (2021/06/10)  [week high: 6, month: 6]
- **Pigweed: 1** (2021/06/10)  [week high: 1, month: 1]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
