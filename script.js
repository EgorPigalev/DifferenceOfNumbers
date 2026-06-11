function subtract(a, b) {
    return a - b;
}

function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const result = subtract(a, b);
    document.getElementById('result').textContent = isNaN(result) ? 'Invalid input' : result;
}

// Экспорт для тестов
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { subtract };
}