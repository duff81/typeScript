interface myPreviousPositions {
    company: string,
    title: string,
    description: string
}

var myPreviousPositions = [
    {
        company: "United States Forest Service",
        title: "Wildland Firefighter",
        description: "fought wildfires"
    },
    {
        company: "Red Mountain Park",
        title: "Zipline Guide",
        description: "pushed people out of trees"
    },
    {
        company: "Cracker Barrell",
        title: "Chef de Cuisine",
        description: "washed dishes"
    }
];
interface mySkills {
    skill: string,
    cool: boolean
}
var mySkills = [
    {
        skill: "Googling",
        cool: true
    },
    {
        skill: "Bow Staff skills",
        cool: true
    },
    {
        skill: "Writing Bagel Bite fan fiction",
        cool: false
    },
    {
        skill: "Doing math",
        cool: false
    }
];

var myInterests = ["Music", "Games", "Movies", "Art"];
console.log("Name: " + "m g".toUpperCase()
    + "\n" +
    "Career: Full Stack Engineer / Instructor"
    + "\n" +
    "Description: I like turtles");
console.log("\n");
console.log("My Interests:");
for (var _i = 0, myInterests_1 = myInterests; _i < myInterests_1.length; _i++) {
    var interest = myInterests_1[_i];
    console.log("* " + interest);
}
console.log("\n");
console.log("My Previous Experience:");
myPreviousPositions.forEach(function (element) {
    displayPosition (element.company, element.title, element.description);
});
console.log("\n");
console.log("My Skills:");
mySkills.forEach(function (element) {
    displaySkill(element.skill, element.cool);
});
function displayPosition ( companyName: string, jobTitle: string, jobDescription: string) {
    console.log("* " + jobTitle + " at " + companyName + ". And I " + jobDescription);
}
function displaySkill(skill: string, isCool:boolean) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}