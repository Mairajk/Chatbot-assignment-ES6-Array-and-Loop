
let arr = [];
let inputsNum;

const produce = () => {

    inputsNum = +document.querySelector(`#inputsNum`).value;

    let formForNum = document.querySelector(`#formForNum`);
    formForNum.innerHTML = ` <div class="resultInputs" id="resultInputs"> `;
    let resultInputs = document.querySelector(`#resultInputs`);

    for (let i = 0; i < inputsNum; i++) {

        resultInputs.innerHTML += `
        <input type="number" name="" class="numInputs" id="inputsNum${i}" value="0" >`;

    }
    formForNum.innerHTML += `
    <button>Arrange</button>`;
}

const arrange = () => {

    console.log("inputsNum : ", inputsNum);


    for (let i = 0; i < inputsNum; i++) {

        let num = document.querySelector(`#inputsNum${i}`).value;

        arr.push(num);

    }
    console.log("arr :", arr);

    let result = document.querySelector(`#result`);
    result.innerHTML = ` <p id="resultD"></p> <p id="resultA"></p> `;

    let resultA = document.querySelector(`#resultA`);
    resultA.innerHTML = " Ascending Order :  ";

    let resultD = document.querySelector(`#resultD`);
    resultD.innerHTML = " Descending Order : ";

    for (let i = 0; i < inputsNum; i++) {


        let arrA = arr.sort((a, b) => a - b)

        resultA.innerHTML += `  ${arrA[i]} ,  `;
    }

    for (let i = 0; i < inputsNum; i++) {


        let arrD = arr.sort((a, b) => b - a)

        resultD.innerHTML += `   ${arrD[i]} ,  `;
    }


    console.log(
        arr.sort((a, b) => a - b)
    );
    console.log(
        arr.sort((a, b) => b - a)
    );
}
