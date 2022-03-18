# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 164** (2022/03/18)  [week high: 164, month: 855]
- **Ash: 20** (2022/03/18)  [week high: 35, month: 35]
- **Elm: 15** (2022/03/18)  [week high: 33, month: 67]
- **Mold: 7676** (2022/03/18)  [week high: 7676, month: 7676]
- **Grass: 2** (2022/03/18)  [week high: 3, month: 4]
- **Oak: 2** (2022/03/18)  [week high: 2, month: 2]
- **Other: 4** (2022/03/18)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
