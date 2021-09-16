# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 99** (2021/09/16)  [week high: 99, month: 99]
- **Fall_Elm: 32** (2021/09/16)  [week high: 32, month: 40]
- **Grass: 7** (2021/09/16)  [week high: 7, month: 7]
- **Mold: 6844** (2021/09/16)  [week high: 6844, month: 48598]
- **Weeds: 4** (2021/09/16)  [week high: 6, month: 7]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
