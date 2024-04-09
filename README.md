# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mulberry: 351** (2024/04/09)  [week high: 1781, month: 1781]
- **Ash: 9** (2024/04/09)  [week high: 26, month: 53]
- **Hickory: 9** (2024/04/09)  [week high: 140, month: 140]
- **Mold: 5993** (2024/04/09)  [week high: 10398, month: 55728]
- **Oak: 26** (2024/04/09)  [week high: 35, month: 202]
- **Sycamore: 18** (2024/04/09)  [week high: 18, month: 18]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html
