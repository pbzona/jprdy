# Jprdy!

I kick ass at Jeopardy, and I want the world to know about it (or at least the people I play along with at home). By building a scoreboard, I want to eliminate excuses and prove I'm the king. Never again will I hear "it was probably pretty close" or, "nah, I think we tied."

There are plenty of React-based Jeopardy scoreboards out there. But none of them have the UI that I think they should. Hence, *Jprdy!* was born.

![Jprdy](./jprdy-screenshot.png?raw=true "Jprdy")

## How to use it

If you just want to play with the app, you can use it here:

[JPRDY](https://jprdy.phizon.io)

As of right now, you can play a full game of Jeopardy, all the way through to the final round. This build reflects the latest release, but you can get the bleeding edge version by cloning the project and running these commands:

`npm install`
`npm start`

### The First Round

To begin, click the **Add New Player** button at the bottom of the page and add the names of whoever you're playing with.

When the game starts, select an "active score" from the list of dollar values at the top of the page. For example, if Alex asks a question worth $200, you'll click the $200 button.

When someone answers the question, click either the checkmark or the X button under their name, to indicate correct or incorrect, respectively. The active value will then be applied to the player's score.

When someone gets a Daily Double, click the **Daily Double** button under their name. You can enter a wager, then click the correct or incorrect button to apply that wager to their score.

### Double Jeopardy

To advance to the next round, click the **Double Jeopardy** button at the bottom of the page. This doubles the value of the questions asked. Wagering for Daily Doubles works the same way.

### Final Jeopardy

To advance to the final round, click, you guessed it, the **Final Jeopardy** button at the bottom of the page.

In this round, each player must first enter a wager. You can do this during the commercial after hearing the category on TV. Once it comes back, each player should enter an answer to the question, then pass the computer/device to the next person to enter their answer (answers will be hidden once entered).

After everyone has answered the question, the right and wrong buttons will be displayed below each player's answer (so no one can lie...). For each player, click either the check or the X, and their wager will be added or subtracted from their score.

To figure out who won, check the final scores!

### Notes

*Jprdy!* is not finished yet! There are still a lot more features I want to add, and a few of them are listed below. This is a minimal product so far, and it works to the extent that it's designed to work. I don't have a lot of checks in place to prevent things from breaking if you click the wrong things.

If you notice something specific and would like to document it to be fixed in an upcoming release, please open an issue. I'll be working through a lot of these myself but it's definitely possible I'll miss things.

### House rules

Since you're playing along at home, different rules may apply in terms of what counts as a correct answer, who gets Daily Doubles, etc.

You can apply whatever house rules you want, and if you have a specific feature that isn't supported by the app, feel free to open an issue. I'd like to expand this section in the future, since I'm sure different people play in different ways at home.

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

The third piece was the most fun to implement. For the header text, I used a free web font called Gyparody (great name). The actual Jeopardy number scores use a font called Swiss 911, which is closely related to Helvetica (and Open Sans, which I used). I used the Google Fonts' "Spectral" to mimic the question text in some buttons. Finally, as an Easter egg, player names (once added) are clickable. This changes the name to a selection of one of four handwriting style fonts, also courtesy of Google.

The end result is a style that looks pretty close to the real thing, in my opinion.

## Current state

I moved to a [release system](https://github.com/pbzona/jprdy/releases), so I'll try to provide incremental updates here when it makes sense, rather than tracking daily changes like before.

Since v0.3, I've been doing some major code cleanup. This includes something that has been on my wishlist for a while now - adding SCSS support - and I didn't even have to eject. The result is fewer components, WAY less redundant code, and more reusable pieces. Getting to v0.3 was a matter of making something that works. Right now, I want to focus on making this project sustainable, which is a challenge based on how haphazardly some of the old stuff was thrown together.

The next release will most likely be a slimmed down version of the working app, with code that will be much easier to build on. Once that's done, I'll start adding features again in subsequent releases.

## Still to-do

- Cleaner UX
- Error handling
- Write tests
- Mobile friendliness (currently Jprdy looks best on a full size screen)
- Refactor into something readable - eject to use SCSS, better component design, etc.
