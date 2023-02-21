const decoder = (code) =>{
    let codeWord = [];
    for (let index = 0; index < code.length; index++) {
        let maybeNumber = Number(code[index]);
        if (Number.isInteger(maybeNumber)) {
            index = index + maybeNumber;
        } else {
            codeWord.push(code[index]);
        }
    }
    let answer = codeWord.join('');
    return answer;
}

console.log(decoder('0h2xce5ngbrdy'))