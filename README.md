# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 913** (2024/03/12)  [week high: 913, month: 3668]
- **Elm: 1255** (2024/03/12)  [week high: 1255, month: 1509]
- **Mold: 27210** (2024/03/12)  [week high: 27210, month: 35661]
- **Ash: 9** (2024/03/12)  [week high: 9, month: 9]
- **Hickory: 18** (2024/03/12)  [week high: 70, month: 70]
- **Mulberry: 61** (2024/03/12)  [week high: 61, month: 290]
- **Oak: 44** (2024/03/12)  [week high: 79, month: 79]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
