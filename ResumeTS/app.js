let resume = [
    {
        Name: "michael greene"
    },

    {
        Work: {
            career: 'Student',
            field: 'IT',
            title: 'Unemployed'
        }

    },

    {
        Descpription: 'Michael is 38 and lives in Birmingham, AL. He is currently enrolled in InnovateBham.'

    },

    {
        My_Interests: {
            interest1: 'guitar',
            interest2: 'improv',
            interest3: 'technology'
        },
    },

    {
        My_Previous_Experience: {

            previous: {
                duties: 'barrista, manager, and wearer of many hats',
                nameOfJob: 'Domestique Coffee Roasters'
            },
            previous2: {
                duties: 'dishwasher and front end',
                nameOfJob: 'Blue stove'
            },

        }
    },

    {
        My_Skills: {
            skill1: 'guitar',
            skill2: 'listening',
            skll3: 'writing',
            skill4: 'longform improv'
        }

    }

]
console.log
let nameBig = resume[0].Name
console.log('Name: ' + nameBig.toUpperCase())




function displayPosition(compName, compTitle, compDesc) {
    console.log(compName, compTitle, compDesc
    )
}
displayPosition(resume[1].Work.career, resume[1].Work.field, resume[1].Work.title)


function displaySkill(skill, isCool) {
    if (isCool === "yes") {
        console.log(
            "* BAM:" + skill)
    }
    else { console.log("* " + skill) }
}


console.log(resume[2].Descpription)
console.log('My Interests:')
console.log("* " + resume[3].My_Interests.interest1)
console.log("* " + resume[3].My_Interests.interest2)
console.log("* " + resume[3].My_Interests.interest3)
console.log('My Previous Experience:')
console.log("* " + resume[4].My_Previous_Experience.previous.duties + " at " + resume[4].My_Previous_Experience.previous.nameOfJob)
console.log("* " + resume[4].My_Previous_Experience.previous2.duties + " at " + resume[4].My_Previous_Experience.previous2.nameOfJob)
console.log("My Skills")
displaySkill(resume[5].My_Skills.skill1, 0)
displaySkill(resume[5].My_Skills.skill2, "yes")
displaySkill(resume[5].My_Skills.skill3, 0)
displaySkill(resume[5].My_Skills.skill4, "yes")
//let nameBig = nameBig.toUpperCase()

//console.log (resume[0], function(x){
 //   return (resume[0]).toUpperCase();
//})

//const dumbName = 'michael greene';
//console.log(dumbName.toUpperCase())
//{let nameBig = (resume[0]).toUpperCase()};


/*
console.log('name'.toUpperCase),
    console.log(

        'IT'
    ),
    console.log(
        'Michael is 38 and lives in Birmingham, AL.  He is currently enrolled in InnovateBham.'
    ),
    console.log(
        'BAM: guitar, BAM: improv, technology'
    ),
    console.log(
        'barrista, manager, and wearer of many- Domestique Coffee, dishwasher, customer service- Blue Stove'
    ),
    console.log(
        'guitar, listening, writing'
    )*/