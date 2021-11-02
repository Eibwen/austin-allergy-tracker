# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 6** (2021/11/02)  [week high: 6, month: 6]
- **Mold: 1121** (2021/11/02)  [week high: 26283, month: 37641]
- **Ragweed: 7** (2021/11/02)  [week high: 49, month: 263]
- **Redberry___Juniper: 1** (2021/11/02)  [week high: 625, month: 625]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
