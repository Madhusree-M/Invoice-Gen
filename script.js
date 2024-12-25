document.getElementById('invoice-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const customerName = document.getElementById('customer-name').value;
    const address = document.getElementById('address').value;
    const itemDescription = document.getElementById('item-description').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);

    // Calculate totals
    const subtotal = quantity * price;
    const taxAmount = (taxRate / 100) * subtotal;
    const totalAmount = subtotal + taxAmount;

    // Generate the invoice
    const invoiceHTML = `
        <h2>Invoice</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Item Details:</h3>
        <table style="border:1px solid black">
            <tr><th>Item Description</th><th>Quantity</th><th>Price per Unit</th><th>Total Price</th></tr>
            <tr><td>${itemDescription}</td><td>${quantity}</td><td>Rs.${price}</td><td>Rs.${subtotal}</td></tr>
        </table>
        <h3>Tax Calculation:</h3>
        <p><strong>Tax Rate:</strong> ${taxRate}%</p>
        <p><strong>Tax Amount:</strong> Rs.${taxAmount}</p>
        <h3>Total Amount Due:</h3>
        <p><strong>Rs.${totalAmount}</strong></p>
    `;

    // Display the invoice
    document.getElementById('invoice').innerHTML = invoiceHTML;
});
