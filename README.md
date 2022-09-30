# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 141** (2022/09/30)  [week high: 331, month: 331]
- **Grass: 9** (2022/09/30)  [week high: 18, month: 18]
- **Mold: 2683** (2022/09/30)  [week high: 5677, month: 50165]
- **Other: 2** (2022/09/30)  [week high: 2, month: 3]
- **Pigweed: 3** (2022/09/30)  [week high: 3, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
