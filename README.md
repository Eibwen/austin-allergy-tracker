# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 2** (2022/09/20)  [week high: 4, month: 296]
- **Grass: 2** (2022/09/20)  [week high: 6, month: 25]
- **Mold: 2108** (2022/09/20)  [week high: 16268, month: 50165]
- **Ragweed: 6** (2022/09/20)  [week high: 15, month: 95]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
