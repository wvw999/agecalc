# Independent Project

#### Epicodus: Javascript Course: Friday, August 3rd, 2018

#### Will Swanson

## Description

 Planetary Age Calculator will return various attributes of a person's age relative to other planets, etc

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* jQuery 3.3.1
* Node.js
* Bootstrap 4.1.3

## User Stories

* Take a person’s age in years and convert it into seconds.
* Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
* Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
* Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
* Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
* Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

## Planning

1. Configuration/dependencies
  * ALL dependencies.

2. Specs
  * Spec : allows user to input date of birth, input 09/30/1925, output 09/30/1925.
  * Spec : calculates in seconds the time between the moment the birth data was entered and birth date/time , input ^^ + current time of 09/31/1925, output 86400 seconds.
  * Spec : using seconds data calculate mercury years, input 7568640 seconds, output 1 mercury year.
  * Spec : using seconds data calculate venus years, input 19552320 seconds, output 1 venus year.
  * Spec : using seconds data calculate mars years, input 59287680 seconds, output 1 mars year.
  * Spec : using seconds data calculate jupiter years, input 374016960 seconds, output 1 jupiter year.
  * Spec : using seconds data calculate time remaining based on average usa lifespan of 2483144640 seconds, input 2483144639 seconds, output 1 second.
  * Spec : using seconds data if time remaining < 0 then return 'bonus' time amount, input 2483144660 seconds, output 20 seconds.
  * Spec : using seconds data calculate mercury years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 328 mercury years.
  * Spec : using seconds data calculate venus years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 127 venus years.
  * Spec : using seconds data calculate mars years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 41 mars years.
  * Spec : using seconds data calculate jupiter years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 6 jupiter years.

3. Integration
  * tbd

4. UX/UI
  * None

5. Polish
  * n/a

## License

This software is licensed under the MIT license.

Copyright (c)2018 **Will Swanson**
