"use strict";

/** Class representing a vehicle */
class Vehicle {
  /**
   * Create a vehicle
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /**
   * Honk the vehicle.
   * @return {string}
   */
  honk() {
    return "Beep.";
  }

  /**
   * Return string that describes details of vehicle.
   * @return {string}
   */
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/**
 * Class representing a car.
 * @extends Vehicle
 */
class Car extends Vehicle {
  /**
   * Create a car
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

/**
 * Class representing a motorcycle.
 * @extends Vehicle
 */
class Motorcycle extends Vehicle {
  /**
 * Create a motorcycle
 * @param {string} make
 * @param {string} model
 * @param {number} year
 */
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  /**
   * Rev the motorcycle's engine.
   * @return {string}
   */
  revEngine() {
    return "VROOM!!!";
  }
}

/** Class representing a garage for vehicles. */
class Garage {
  /**
   * Create a garage
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  /**
   * Add vehicle to garage if under capacity
   * @param {Vehicle} vehicle
   * @return {string}
   */
  add(vehicle) {
    if (this.vehicles.length === this.capacity) {
      return "Sorry, we're full.";
    }
    else if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    } else {
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
}