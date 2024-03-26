# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 439** (2024/03/26)  [week high: 3168, month: 7002]
- **Elm: 263** (2024/03/26)  [week high: 1492, month: 3089]
- **Mold: 32431** (2024/03/26)  [week high: 55728, month: 55728]
- **Hickory: 9** (2024/03/26)  [week high: 44, month: 70]
- **Mulberry: 18** (2024/03/26)  [week high: 140, month: 263]
- **Oak: 35** (2024/03/26)  [week high: 105, month: 202]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
