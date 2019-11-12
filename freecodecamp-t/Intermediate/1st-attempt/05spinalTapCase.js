// Convert a string to spinal case.Spinal case is all - lowercase - words - joined - by - dashes.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    // Create a variable storing the regex to remove white space and underscore
    // Make all letters lowercase
    // Replace spaces and underscores for "-"

    let regex = /\s+/g;


}

// Time: 20:00
// Grade: 0

spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") // should return "all-the-small-things".
