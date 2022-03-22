# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 50615** (2022/03/22)  [week high: 50615, month: 50615]
- **Ash: 2** (2022/03/22)  [week high: 35, month: 35]
- **Cedar: 1** (2022/03/22)  [week high: 164, month: 855]
- **Elm: 1** (2022/03/22)  [week high: 33, month: 67]
- **Grass: 1** (2022/03/22)  [week high: 3, month: 4]
- **Oak: 2** (2022/03/22)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
