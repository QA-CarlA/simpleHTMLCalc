const num1 = document.querySelector("#firstNumber");
const num2 = document.querySelector("#secondNumber");
const result = document.querySelector("#result");
const history = document.querySelector("#history");

const getValues = () => 
{
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

const printResult = (newValue) =>
{
    result.value = newValue;
}

const add = () =>
{
    const [num1, num2] = getValues();
    const  newResult = num1 + num2;
    printResult(newResult);
}