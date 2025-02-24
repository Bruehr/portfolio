const apiKey = 'UJBtkUuZP_ilXZaevHnzoF5OCx9YuudD';
function clearForm() {
    $('#base-currency').val('');
    $('#convert-currency').val('');
    $('#from-date').val('');
    $('#to-date').val('');
    $('#error-messages').text('');
    const ctx = document.getElementById('chartjs-0').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function validateForm() {
    let valid = true;
    let errorMessage = '';
    if (!$('#base-currency').val()) {
        errorMessage += 'Base Currency is Required<br>';
        valid = false;
    }
    if (!$('#convert-currency').val()) {
        errorMessage += 'Convert To Currency is Required<br>';
        valid = false;
    }
    if (!$('#from-date').val()) {
        errorMessage += 'From Date is Required<br>';
        valid = false;
    }
    if (!$('#to-date').val()) {
        errorMessage += 'To Date is Required<br>';
        valid = false;
    }
    $('#error-messages').html(errorMessage);
    return valid;
}

function showResults() {
    if (!validateForm()) {
        return;
    }
    const baseCurrency = $('#base-currency').val();
    const convertCurrency = $('#convert-currency').val();
    const fromDate = $('#from-date').val();
    const toDate = $('#to-date').val();
    const url = `https://api.polygon.io/v2/aggs/ticker/C:${baseCurrency}${convertCurrency}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&limit=120&apiKey=${apiKey}`;
    $.get(url, function(data) {
        if (data.results && data.results.length > 0) {
            const values = data.results.map(result => result.c);
            const dates = data.results.map(result => new Date(result.t).toLocaleDateString());
            const ctx = document.getElementById("chartjs-0");
            new Chart(ctx, {
                "type": "line",
                "data": {
                    "labels": dates,
                    "datasets": [{
                        "label": `One ${baseCurrency} to ${convertCurrency}`,
                        "data": values,
                        "fill": false
                    }]
                },
                "options": {
                    responsive: false,
                    maintainAspectRatio: true
                }
            });
        } else {
            $('#error-messages').text('No data available for the selected currencies and dates.');
        }
    }).fail(function() {
        $('#error-messages').text('Error retrieving data. Please try again later.');
    });
}
$('#show-results').click(showResults);
$('#clear').click(clearForm);
