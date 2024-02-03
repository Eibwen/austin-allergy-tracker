# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 149** (2024/02/03)  [week high: 2404, month: 4291]
- **Elm: 44** (2024/02/03)  [week high: 44, month: 44]
- **Hickory: 9** (2024/02/03)  [week high: 9, month: 9]
- **Mold: 13618** (2024/02/03)  [week high: 19743, month: 60440]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
