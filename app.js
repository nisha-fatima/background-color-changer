let colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener('change', function (event) {
    document.body.style.backgroundColor = event.target.value;
}
)