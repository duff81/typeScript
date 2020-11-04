
// interface Resume {
//     name: string,
//     work: Work,
//     description: string,
//     myinterests: MyInterests,
//     myPreviousExperience: MyPreviousExperience ,
//     mySkills: MySkills
// }
// interface Work{
//     career: string,
//     field: string,
//     title: string
// }
// interface MyInterests {
//     interest1: string,
//     interest2: string,
//     interest3: string
// }
// interface MyPreviousExperience{
//     previous: Previous,
//     previous2: Previous2
// }
// interface Previous{
//     duties: string,
//     nameOfJob: string
// }
// interface Previous2{
//     duties: string,
//     nameOfJob: string
// }
// interface MySkills{
//     skill1: string,
//     skill2: string,
//     skill3: string,
//     skill4: string
// }
// let resume: Resume[] = [
//     {
//         name: "michael greene",
//     },

//     {
//        work: Work  {
//             career: 'Student',
//             field: 'IT',
//             title: 'Unemployed'
//         },

//     },

//     {
//         descpription: 'Michael is 38 and lives in Birmingham, AL. He is currently enrolled in InnovateBham.'

//     },

//     {
//         myInterests: {
//             interest1: 'guitar',
//             interest2: 'improv',
//             interest3: 'technology'
//         }
//     },

//     {
//         myPreviousExperience: {

//             previous: {
//                 duties: 'barrista, manager, and wearer of many hats',
//                 nameOfJob: 'Domestique Coffee Roasters'
//             },
//             previous2: {
//                 duties: 'dishwasher and front end',
//                 nameOfJob: 'Blue stove'
//             },

//         }
//     },

//     {
//         mySkills: {
//             skill1: 'guitar',
//             skill2: 'listening',
//             skill3: 'writing',
//             skill4: 'longform improv'
//         }

//     }

// ]
// console.log
// let nameBig = resume[0].name
// console.log('Name: ' + nameBig.toUpperCase())




// function displayPosition(compName, compTitle, compDesc) {
//     console.log(compName, compTitle, compDesc
//     )
// }
// displayPosition(resume[1].work.career, resume[1].work.field, resume[1].work.title)


// function displaySkill(skill, isCool) {
//     if (isCool === "yes") {
//         console.log(
//             "* BAM:" + skill)
//     }
//     else { console.log("* " + skill) }
// }


// console.log(resume[2].descpription)
// console.log('My Interests:')
// console.log("* " + resume[3].myInterests.interest1)
// console.log("* " + resume[3].myInterests.interest2)
// console.log("* " + resume[3].myInterests.interest3)
// console.log('My Previous Experience:')
// console.log("* " + resume[4].myPreviousExperience.previous.duties + " at " + resume[4].myPreviousExperience.previous.nameOfJob)
// console.log("* " + resume[4].myPreviousExperience.previous2.duties + " at " + resume[4].myPreviousExperience.previous2.nameOfJob)
// console.log("My Skills")
// displaySkill(resume[5].mySkills.skill1, 0)
// displaySkill(resume[5].mySkills.skill2, "yes")
// displaySkill(resume[5].mySkills.skill3, 0)
// displaySkill(resume[5].mySkills.skill4, "yes")
