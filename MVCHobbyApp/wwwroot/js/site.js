// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        // Validation: Ensure a positive number is entered
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val(total.toFixed(2)); // Display with two decimal places
    });
});
