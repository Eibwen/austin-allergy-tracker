# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 90** (2022/04/05)  [week high: 90, month: 90]
- **Oak: 1087** (2022/04/05)  [week high: 1875, month: 1875]
- **Mulberry: 40** (2022/04/05)  [week high: 40, month: 40]
- **Other: 20** (2022/04/05)  [week high: 20, month: 20]
- **Ash: 6** (2022/04/05)  [week high: 18, month: 35]
- **Grass: 1** (2022/04/05)  [week high: 4, month: 4]
- **Mold: 2294** (2022/04/05)  [week high: 6687, month: 50615]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
