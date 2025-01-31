const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');

calculatorContainer.addEventListener('click', e => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});


