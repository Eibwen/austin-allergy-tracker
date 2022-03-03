# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 855** (2022/03/03)  [week high: 855, month: 1545]
- **Elm: 28** (2022/03/03)  [week high: 52, month: 66]
- **Grass: 1** (2022/03/03)  [week high: 1, month: 1]
- **Mold: 2040** (2022/03/03)  [week high: 2876, month: 2876]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
