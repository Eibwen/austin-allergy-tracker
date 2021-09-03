# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 2** (2021/08/27)  [week high: 2, month: 15]
- **Grass: 3** (2021/08/27)  [week high: 3, month: 5]
- **Mold: 2016** (2021/08/27)  [week high: 4442, month: 32646]
- **Weeds: 4** (2021/08/27)  [week high: 4, month: 7]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/
