function printHelloWorld() {
    console.log('Hello World');
}

printHelloWorld();

const eligibleToVote = (age) => {
    if (age < 1) {
        console.log("Invalid age");
    } else if (age < 18) {
        console.log("Not Eligible");
    } else {
        console.log("Eligible");
    }
}

eligibleToVote(18);
eligibleToVote(30);
eligibleToVote(0);
eligibleToVote(10);