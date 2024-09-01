const arr2=[1,2,2,3,3,3,4,4,4,4,5,5]
console.log(mostfrequent(arr2));
function mostfrequent(arr2) {
    const frequency={};
    for (const item of arr2) {
        frequency[item]=(frequency[item]||0)+1;
    }
    const maxfrequency=Math.max(...Object.values(frequency));
    return Object.keys(frequency).find(key => frequency[key] == maxfrequency);
}