document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    const decimalButton = document.getElementById('decimal');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            if (buttonText === '=') {
                try {
                    result.value = evaluateExpression(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (buttonText === 'C') {
                result.value = '';
            } else {
                result.value += buttonText;
            }
        });
    });

    decimalButton.addEventListener('click', function () {
        if (!result.value.includes('.')) {
            result.value += '.';
        }
    });

    function evaluateExpression(expression) {
        try {
            const evaluate = new Function('return ' + expression);
            return evaluate();
        } catch (error) {
            throw new Error('Invalid expression');
        }
    }
});

