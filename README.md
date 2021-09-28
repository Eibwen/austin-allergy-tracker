# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 132** (2021/09/28)  [week high: 132, month: 256]
- **Ragweed: 161** (2021/09/28)  [week high: 363, month: 363]
- **Grass: 2** (2021/09/28)  [week high: 4, month: 7]
- **Mold: 1579** (2021/09/28)  [week high: 5528, month: 48598]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
