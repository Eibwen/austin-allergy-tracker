# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 7671** (2021/07/12)  [week high: 30171, month: 40319]
- **Grass: 1** (2021/07/12)  [week high: 2, month: 12]
- **Pigweed: 3** (2021/07/12)  [week high: 3, month: 3]
- **Weeds: 2** (2021/07/12)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
