function transformValue(val) {
    if (val.substring(0, 2) !== 'C0') {
        return 'C0' + val.substring(6, 13);
    } else {
        return val;
    }
}

document.getElementById('inputValue').addEventListener('input', function() {
    const inputValue = this.value;

    const transformedValue = transformValue(inputValue);

    document.getElementById('output').value = transformedValue;
});