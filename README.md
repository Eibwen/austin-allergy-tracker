# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 13161** (2022/09/08)  [week high: 50165, month: 50165]
- **Fall_Elm: 8** (2022/09/08)  [week high: 164, month: 296]
- **Grass: 1** (2022/09/08)  [week high: 1, month: 25]
- **Pigweed: 3** (2022/09/08)  [week high: 3, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
