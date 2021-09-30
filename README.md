# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 559** (2021/09/30)  [week high: 559, month: 559]
- **Ragweed: 201** (2021/09/30)  [week high: 206, month: 363]
- **Mold: 8884** (2021/09/30)  [week high: 8884, month: 48598]
- **Grass: 1** (2021/09/30)  [week high: 4, month: 7]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
