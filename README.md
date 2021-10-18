# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 13622** (2021/10/18)  [week high: 37641, month: 37641]
- **Grass: 6** (2021/10/18)  [week high: 6, month: 6]
- **Ragweed: 33** (2021/10/18)  [week high: 132, month: 363]
- **Elm: 2** (2021/10/18)  [week high: 2, month: 2]
- **Weeds: 2** (2021/10/18)  [week high: 2, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
