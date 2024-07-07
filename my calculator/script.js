document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.calculator-screen');
    const buttons = document.querySelectorAll('.btn');
    let screenValue = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value === 'C') {
                screenValue = '';
                screen.value = screenValue;
            } else if (value === '=') {
                try {
                    screenValue = eval(screenValue);
                    screen.value = screenValue;
                } catch (error) {
                    screen.value = 'Error';
                }
            } else {
                screenValue += value;
                screen.value = screenValue;
            }
        });
    });
});