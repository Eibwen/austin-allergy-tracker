# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Elm: 842** (2024/03/06)  [week high: 1509, month: 1509]
- **Cedar: 412** (2024/03/06)  [week high: 553, month: 3668]
- **Mold: 21516** (2024/03/06)  [week high: 34836, month: 35661]
- **Hickory: 9** (2024/03/06)  [week high: 35, month: 35]
- **Mulberry: 35** (2024/03/06)  [week high: 70, month: 290]
- **Oak: 61** (2024/03/06)  [week high: 70, month: 70]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
