# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 49** (2021/02/24)  [week high: 51, month: 1415]
- **Elm: 2** (2021/02/24)  [week high: 2, month: 68]
- **Grass: 1** (2021/02/24)  [week high: 1, month: 1]
- **Mold: 716** (2021/02/24)  [week high: 1448, month: 6671]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
