# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 190** (2022/09/12)  [week high: 190, month: 296]
- **Mold: 10953** (2022/09/12)  [week high: 50165, month: 50165]
- **Ragweed: 35** (2022/09/12)  [week high: 35, month: 35]
- **Grass: 1** (2022/09/12)  [week high: 4, month: 25]
- **Other: 3** (2022/09/12)  [week high: 3, month: 3]
- **Pigweed: 4** (2022/09/12)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
