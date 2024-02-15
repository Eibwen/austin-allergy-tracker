# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 3668** (2024/02/15)  [week high: 3668, month: 3668]
- **Elm: 1167** (2024/02/15)  [week high: 1167, month: 1167]
- **Mulberry: 290** (2024/02/15)  [week high: 290, month: 290]
- **Hickory: 9** (2024/02/15)  [week high: 9, month: 9]
- **Mold: 5677** (2024/02/15)  [week high: 11012, month: 23051]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
