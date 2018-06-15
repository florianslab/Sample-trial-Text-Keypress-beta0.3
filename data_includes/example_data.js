// We will explain this line later
var shuffleSequence = seq("trial");
// We will explain this line later
PennController.ResetPrefix(null);

// This is where you script your trial(s)
var items = [
    ["trial", "PennController", PennController(
        // We create a new text element that we name 'test sentence,' which contains the text of our complex test sentence
        newText("test sentence", "A is colder than B, though A is not cold yet.")
            .print() // This prints the text onto the screen
        ,
        // We create a key element that we name 'answer' and which reacts to any key press on F (coherent) or J (incoherent)
        newKey("answer", "FJ")
            .wait() // This waits for a key press before validation

    )]
];