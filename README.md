# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Grass: 5** (2022/09/26)  [week high: 6, month: 7]
- **Ragweed: 25** (2022/09/26)  [week high: 25, month: 95]
- **Mold: 969** (2022/09/26)  [week high: 2108, month: 50165]
- **Other: 2** (2022/09/26)  [week high: 2, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
