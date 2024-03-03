# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 483** (2024/03/03)  [week high: 623, month: 3668]
- **Elm: 377** (2024/03/03)  [week high: 377, month: 1167]
- **Ash: 9** (2024/03/03)  [week high: 9, month: 9]
- **Hickory: 18** (2024/03/03)  [week high: 18, month: 18]
- **Mold: 17488** (2024/03/03)  [week high: 35661, month: 35661]
- **Oak: 70** (2024/03/03)  [week high: 70, month: 70]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
