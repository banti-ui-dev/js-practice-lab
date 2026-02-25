//01
const obj1 = {
    name: "Banti",
    skills: { firstskill: "JS", secondskill: "HTML" },
};
const obj2 = { ...obj1 }; //shallow coppy
const obj3 = structuredClone(obj1); // Deep copy
// const obj3 = {...obj1, skills: {...obj1.skills, thirdSkill: "Wordpress"}}; //To add new object
obj2.skills.secondskill = "CSS";
console.log(obj1.skills);//firstskill: 'JS', secondskill: 'CSS'
console.log(obj2.skills);//firstskill: 'JS', secondskill: 'CSS'
console.log(obj3.skills);//firstskill: 'JS', secondskill: 'HTML

//02
const employeeA = {
    name: "Amit",
    skills: { primary: "JavaScript", secondary: "React" },
};
// shallowCopy Example
const shallowCopyEmployee = { ...employeeA }; // shallowCopy
shallowCopyEmployee.skills.primary = "Angular";
console.log("Employee A Primery Skill:", employeeA.skills.primary); // Angular
console.log(
    "shallow Copy Employee A Primery Skill:",
    shallowCopyEmployee.skills.primary,
); // Angular

const employeeB = {
    name: "Amit",
    skills: { primary: "JavaScript", secondary: "React" },
};
// deepCopy Example
const deepCopyEmployee = JSON.parse(JSON.stringify(employeeB));
deepCopyEmployee.skills.primary = "Next JS";
console.log("Employee B Primery Skill:", employeeB.skills.primary); // JavaScript
console.log("deep Copy Employee B Primery Skill:", deepCopyEmployee.skills.primary,); //  Next JS