# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 101** (2022/03/08)  [week high: 855, month: 1545]
- **Elm: 62** (2022/03/08)  [week high: 62, month: 66]
- **Ash: 4** (2022/03/08)  [week high: 8, month: 8]
- **Grass: 1** (2022/03/08)  [week high: 4, month: 4]
- **Mold: 1961** (2022/03/08)  [week high: 4113, month: 4113]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
