const lbInput = document.querySelector('#lb > input');
const ozInput = document.querySelector('#oz > input');
const tonInput = document.querySelector('#ton > input');
const kgInput = document.querySelector('#kg > input');

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function converterLb() {
    const lb = parseFloat(lbInput.value);
    const oz = lb * 16;
    const ton = lb / 2000;
    const kg = lb * 0.45359237;
    ozInput.value = roundNum(oz);
    tonInput.value = roundNum(ton);
    kgInput.value = roundNum(kg);
};

function converterOz() {
    const oz = parseFloat(ozInput.value);
    const lb = oz / 16;
    const ton = oz / 32000;
    const kg = oz * 0.02834952;
    lbInput.value = roundNum(lb);
    tonInput.value = roundNum(ton);
    kgInput.value = roundNum(kg);
}

function converterTon() {
    const ton = parseFloat(tonInput.value);
    const lb = ton * 2000;
    const oz = ton * 32000;
    const kg = ton * 1000;
    lbInput.value = roundNum(lb);
    ozInput.value = roundNum(oz);
    kgInput.value = roundNum(kg);
}

function converterKg() {
    const kg = parseFloat(kgInput.value);
    const lb = kg / 0.45359237;
    const oz = kg / 0.02834952;
    const ton = kg / 1000;
    lbInput.value = roundNum(lb);
    ozInput.value = roundNum(oz);
    tonInput.value = roundNum(ton);
}

function main() {
    lbInput.addEventListener('input', converterLb); 
    ozInput.addEventListener('input', converterOz);
    tonInput.addEventListener('input', converterTon);
    kgInput.addEventListener('input', converterKg);
};

main();