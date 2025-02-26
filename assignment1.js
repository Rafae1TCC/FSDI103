// Declare variables using let and const
const protagonist = "Lucas";
const sidekick = "Mr. Mustache";
const setting = "a city made of paper";
let villain = "Dr. Untoasted Bread";
let object = "a magical toaster";
let action = "toast bread";
let outcome = "toast Dr. Untoasted Bread";

// Create the story using the variables
let story = `
In ${setting}, a young man named ${protagonist} found ${object}. 
His best friend, ${sidekick}, suggested using it to ${action}, but they didn’t know that ${villain} was watching them. 
After a series of absurd events, they managed to ${outcome} and lived happily ever after... until the toaster stopped working :(.
`;

// Print the story to the console
console.log(story);

// Change some values to create a different version of the story
object = "a flying umbrella";
action = "sing opera";
outcome = "open an interdimensional portal with all the singing that occured";
villain =
  "the entire Treato la Fenice filled with professional Opera critics and performers,";

// New story with modified values
let newStory = `
In ${setting}, a young man named ${protagonist} found ${object}. 
His best friend, ${sidekick}, suggested using it to ${action}, but they didn’t know that ${villain} were watching them. 
After a series of absurd events, they managed to ${outcome} and lived happily ever after... until the umbrella stopped flying :(.
`;

// Print the new story to the console
console.log(newStory);
