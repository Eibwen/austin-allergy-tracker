# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 526** (2021/10/04)  [week high: 559, month: 559]
- **Mold: 15103** (2021/10/04)  [week high: 15103, month: 15103]
- **Ragweed: 132** (2021/10/04)  [week high: 201, month: 363]
- **Other: 4** (2021/10/04)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
