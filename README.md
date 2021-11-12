# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 8** (2021/11/12)  [week high: 10, month: 10]
- **Mold: 1861** (2021/11/12)  [week high: 6054, month: 37641]
- **Ragweed: 2** (2021/11/12)  [week high: 11, month: 99]
- **Redberry___Juniper: 2** (2021/11/12)  [week high: 4, month: 625]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
