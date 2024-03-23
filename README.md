# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 3168** (2024/03/23)  [week high: 4861, month: 7002]
- **Elm: 1474** (2024/03/23)  [week high: 2176, month: 3089]
- **Mold: 55728** (2024/03/23)  [week high: 55728, month: 55728]
- **Ash: 9** (2024/03/23)  [week high: 53, month: 53]
- **Hickory: 9** (2024/03/23)  [week high: 26, month: 70]
- **Mulberry: 105** (2024/03/23)  [week high: 263, month: 263]
- **Oak: 44** (2024/03/23)  [week high: 202, month: 202]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
