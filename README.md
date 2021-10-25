# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 21** (2021/10/25)  [week high: 99, month: 263]
- **Grass: 4** (2021/10/25)  [week high: 4, month: 6]
- **Mold: 2566** (2021/10/25)  [week high: 5611, month: 37641]
- **Other: 2** (2021/10/25)  [week high: 2, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
