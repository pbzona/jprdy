# Jprdy!

I kick ass at Jeopardy, and I want the world to know about it (or at least the people I play along with at home). By building a scoreboard, I want to eliminate excuses and prove I'm the king. Never again will I hear "it was probably pretty close" or, "nah, I think we tied."

There are plenty of React-based Jeopardy scoreboards out there. But none of them have the UI that I think they should. Hence, *Jprdy!* was born.

## How to use it

If you just want to play with the app, you can use it here:

[JPRDY](https://jprdy.phizon.io)

It's not finished yet! There are still a lot more features I want to add, and a few of them are listed below. Right now it works pretty well for the first two rounds, but Final Jeopardy isn't included. There is also very little error handling, so fair warning, certain inputs may cause interesting results.

## Concept

The concept for *Jprdy!* is based on three requirements:

  1.  It must run 100% in the browser, no backend
  2.  Data must be persistent if the user exits or accidentally hits the back button
  3.  It must be a single page app with no routing

Reconciling these two was a challenge at first. I decided to hold state in the browser's `localStorage` and totally forgo traditional state containers like Redux. Will this be my downfall? Time will tell.

The third requirement has been easier to navigate, but has also left me in callback hell at times. As my state model improves, I expect this to be less of a challenge.

## Design

The genesis for this project was its design. I mentioned earlier that there are other React Jeopardy scoreboards out there that aren't aligned with my vision. What is my vision exactly? I'm glad you asked:

  - Buttons from which you select an "active" value depending on the question being asked
  - A one-click "right" or "wrong" button to indicate whether a player answered correctly, and modify their current score based on the active value
  - Actually looks like Jeopardy

This project was bootstrapped using `create-react-app`, so you can see the first two for yourself by installing the project and running `npm start` or `yarn start`.

The third piece was the most fun to implement. For the header text, I used a free web font called Gyparody (great name). The actual Jeopardy number scores use a font called Swiss 911, which is closely related to Helvetica (my implementation). I used the Google Fonts' "Spectral" to mimic the question text in some buttons. Finally, as an Easter egg, player names (once added) are clickable. This changes the name to a selection of one of four handwriting style fonts, also courtesy of Google.

The end result is a style that looks pretty close to the real thing, in my opinion.

## Latest changes

11/17/17 - Added the wager feature. This allows players to place wagers for Daily Doubles. It should not be too long before I'm able to turn this into a Final Jeopardy round.

## Still to-do

- Implement Final Jeopardy round
- Cleaner UX
- Remove my little test buttons
- Write tests

This is an incomplete app that is being actively worked on. This active work is haphazard at times, and certain implementations have been hacked together to create a working prototype. It's also my first "real" React project. I don't want to apologize for my code, but know that I am aware of the issues.