// Instructions
// In this exercise, you'll be implementing the quest logic for a new RPG game a friend is developing.
// The game's main character is Annalyn, a brave girl with a fierce and loyal pet dog. Unfortunately,
// disaster strikes, as her best friend was kidnapped while searching for berries in the forest.
// Annalyn will try to find and free her best friend, optionally taking her dog with her on this quest.

// After some time spent following her best friend's trail, she finds the camp in which her best friend is imprisoned.
// It turns out there are two kidnappers: a mighty knight and a cunning archer.

// Having found the kidnappers, Annalyn considers which of the following actions she can engage in:

// Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on,
// so he will be vulnerable.
// Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
// Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping,
// as archers are trained in bird signaling so they could intercept the message.
// Free prisoner: Annalyn can try sneaking into the camp to free the prisoner,
// but this tactic will only work if the prisoner is awake and the other two characters are sleeping. If the prisoner is sleeping, they'll be startled by Annalyn's sudden appearance and will awaken the other two characters. The prisoner can also be freed if the archer is sleeping and Annalyn has her pet dog with her, as the knight will be scared by the dog and will withdraw, and the archer can't equip his bow fast enough to prevent the prisoner from being freed.
// You have four tasks: to implement the logic for determining if
// the above actions are available based on the state of the three characters found in the forest 
// and whether Annalyn's pet dog is present or not.

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
 export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake
  }
  
  /**
   * A useful spy captures information, which they can't do if everyone's asleep.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can spy on someone.
   */
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake
  }
  
  /**
   * You'll get caught by the archer if you signal while they're awake.
   *
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can send a signal to the prisoner.
   */
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake
  }
  
  /**
   * The final stage in the plan: freeing Annalyn's best friend.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   * @param {boolean} petDogIsPresent
   *
   * @returns {boolean} Whether or not you can free Annalyn's friend.
   */
  export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  ) {
    return (prisonerIsAwake && !knightIsAwake && !archerIsAwake) || (!archerIsAwake && petDogIsPresent)
   }