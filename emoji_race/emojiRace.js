"use strict";

/** Emoji Race
 *
 * Two emojis race one another when "Start Race" button clicked
 * The first emoji to reach the finish line wins!
 *
 * The amount of steps a contestant takes when racing is random
 * The location of the finish line is determined by the window size.
 */

const FINISH_LINE_OFFSET = 200;
const TIME_BETWEEN_STEPS_MS = 100;
const MIN_STEPS = 5;
const MAX_STEPS = 20;

const finishLine = document.getElementById("finish-line");
const raceTrack = document.getElementById("race-track");
const startRaceButton = document.getElementById("start-race");
const c1HtmlLocation = document.getElementById("contestant-1");
const c2HtmlLocation = document.getElementById("contestant-2");
const c1HtmlStepDisplay = document.getElementById("contestant-1-steps");
const c2HtmlStepDisplay = document.getElementById("contestant-2-steps");
const announcementArea = document.getElementById("winner-announcement");

let raceTrackWidth = raceTrack.offsetWidth;
let finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;

/** Class representing a race between 2 contestants */
class Race {
  /**
   * Create a race
   * @param {Contestant} c1
   * @param {Contestant} c2
   */
  constructor(c1, c2) {
    this.contestants = [c1, c2];
    this.raceWinner = null;
    this.raceTimerId = null;
  }

  /** Start the race using global const for interval timer. */
  startRace() {
    this.raceTimerId = setInterval(this.racing.bind(this),
      TIME_BETWEEN_STEPS_MS);
  }

  /** Check for winner, call endRace if winner found.
   *  Otherwise, move both contestants.
   */
  racing() {
    const winner = this.checkForWinner();
    if (winner) {
      this.raceWinner = winner;
      this.endRace();
      return;
    } else {
      this.contestants[0].move();
      this.contestants[1].move();
    }
  }

  /**
   * Check for winner and return winning contestant if exists.
   * @returns {Contestant}
   */
  checkForWinner() {
    const [c1, c2] = this.contestants;
    const haveWinner = (
      c1.stepsTaken >= finishLineLocation ||
      c2.stepsTaken >= finishLineLocation);

    if (haveWinner) {
      return (c1.stepsTaken > c2.stepsTaken) ? c1 : c2;
      // if (c1.stepsTaken > c2.stepsTaken) {
      //   return c1;
      // } else {
      //   return c2;
      // }
    }
  }

  /** End the race and announce the winner. */
  endRace() {
    clearInterval(this.raceTimerId);
    this.announceWinner(this.raceWinner);
  }

  /** Announce the winner of the race by updating the DOM. */
  announceWinner(contestant) {
    announcementArea.innerHTML = `Contestant ${contestant.emoji} has won in
      ${contestant.stepsTaken} steps!`;
  }
}

/** Class representing a contestant. */
class Contestant {
  /**
   * Create a contestant
   * @param {string} emoji
   * @param {HTMLElement} htmlLocation
   * @param {HTMLElement} htmlStepDisplay
   */
  constructor(emoji, htmlLocation, htmlStepDisplay) {
    this.emoji = emoji;
    this.htmlLocation = htmlLocation;
    this.htmlStepDisplay = htmlStepDisplay;
    this.stepsTaken = 0;

    htmlLocation.innerText = emoji;
    this.updateHtmlSteps();
  }

  /** Makes contestant take a random number of steps (pixels). */
  move() {
    const stepsToMove = this.randomSteps();
    this.stepsTaken += stepsToMove;
    this.htmlLocation.style.left = `${this.stepsTaken}px`;
    this.updateHtmlSteps();
  }

  /** Generate a random number between MAX and MIN global constants inclusively */
  randomSteps() {
    // Used W3's Math.random() page to return random num
    //  with both params inclusively.
    return Math.floor(Math.random() * (MAX_STEPS - MIN_STEPS + 1)) + MIN_STEPS;
  }

  /** Update a contestant's steps displayed in DOM. */
  updateHtmlSteps() {
    this.htmlStepDisplay.innerText = `${this.emoji} steps: ${this.stepsTaken}`;
  }
}

/** Reset page and the start new race with two contestants. */
function handleStartBtn() {
  announcementArea.innerHTML = "";
  const c1 = new Contestant("🎃", c1HtmlLocation, c1HtmlStepDisplay);
  const c2 = new Contestant("🐧", c2HtmlLocation, c2HtmlStepDisplay);
  const race = new Race(c1, c2);
  race.startRace();
}

/** Size racetrack based on width of user's screen. */
function resizeTrack() {
  raceTrackWidth = raceTrack.offsetWidth;
  finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;
  finishLine.style.left = `${finishLineLocation}px`;
}

/**  Resize racetrack and create click handler for start btn. */
function main() {
  // default position of html finish line: 200px before end of racetrack
  finishLine.style.left = `${finishLineLocation}px`;

  // update position of html finish line when window resized
  window.addEventListener("resize", resizeTrack);

  // create and setup a new race
  startRaceButton.addEventListener("click", handleStartBtn);
}


main();
