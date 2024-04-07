# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mulberry: 518** (2024/04/07)  [week high: 1781, month: 1781]
- **Ash: 26** (2024/04/07)  [week high: 26, month: 53]
- **Hickory: 53** (2024/04/07)  [week high: 140, month: 140]
- **Mold: 5607** (2024/04/07)  [week high: 32572, month: 55728]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
