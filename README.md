# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 95** (2022/09/13)  [week high: 95, month: 95]
- **Fall_Elm: 33** (2022/09/13)  [week high: 190, month: 296]
- **Grass: 7** (2022/09/13)  [week high: 7, month: 25]
- **Mold: 3617** (2022/09/13)  [week high: 13161, month: 50165]
- **Other: 3** (2022/09/13)  [week high: 3, month: 3]
- **Pigweed: 6** (2022/09/13)  [week high: 6, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
