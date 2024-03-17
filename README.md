# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 2501** (2024/03/17)  [week high: 7002, month: 7002]
- **Elm: 948** (2024/03/17)  [week high: 3089, month: 3089]
- **Mold: 20559** (2024/03/17)  [week high: 53421, month: 53421]
- **Hickory: 9** (2024/03/17)  [week high: 70, month: 70]
- **Mulberry: 70** (2024/03/17)  [week high: 167, month: 167]
- **Oak: 18** (2024/03/17)  [week high: 140, month: 140]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
