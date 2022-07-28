function count() {
    // When we click the Count button by default we want to hide the warning
    const zeroStepWarning = document.getElementById('zeroStepWarning');
    zeroStepWarning.classList.add('hidden');

    // Read the different inputs
    const start = Number(document.getElementById('start')?.value);
    const end = Number(document.getElementById('end')?.value);
    let step = Number(document.getElementById('step')?.value);

    // If the inputs are not valid numbers do nothing
    if (Number.isNaN(start) || Number.isNaN(end) || Number.isNaN(step)) {
        return;
    }

    // If the step value is zero set it to one and show the warning
    if (step === 0) {
        document.getElementById('step').value = 1;
        step = 1;
        zeroStepWarning.classList.remove('hidden');
    }

    // Forge the resulting string with the numbers and emojis
    let result = '';
    for (let i = start; i <= end; i += step) {
        result += `${i} 👉`;
    }
    result += '🏁';

    // Put the result in the corresponding span
    const resultSpan = document.getElementById('result');
    resultSpan.innerText = result;
}
