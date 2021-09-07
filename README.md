# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 6** (2021/09/07)  [week high: 6, month: 6]
- **Mold: 9259** (2021/09/07)  [week high: 48598, month: 48598]
- **Ragweed: 15** (2021/09/07)  [week high: 15, month: 18]
- **Fall_Elm: 3** (2021/09/07)  [week high: 40, month: 40]
- **Other: 4** (2021/09/07)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
