# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 66** (2021/10/22)  [week high: 99, month: 363]
- **Grass: 4** (2021/10/22)  [week high: 6, month: 6]
- **Mold: 4245** (2021/10/22)  [week high: 13622, month: 37641]
- **Weeds: 2** (2021/10/22)  [week high: 2, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
