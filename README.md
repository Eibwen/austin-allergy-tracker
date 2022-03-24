# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 110** (2022/03/24)  [week high: 110, month: 110]
- **Ash: 10** (2022/03/24)  [week high: 20, month: 35]
- **Cedar: 8** (2022/03/24)  [week high: 164, month: 855]
- **Elm: 2** (2022/03/24)  [week high: 15, month: 67]
- **Grass: 3** (2022/03/24)  [week high: 3, month: 4]
- **Hackberry: 4** (2022/03/24)  [week high: 4, month: 4]
- **Mold: 2761** (2022/03/24)  [week high: 50615, month: 50615]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
