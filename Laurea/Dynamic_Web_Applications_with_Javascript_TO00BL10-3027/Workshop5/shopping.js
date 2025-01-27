function calculate() {
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var shipping = parseInt(document.getElementById('shipping').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var total = document.getElementById('total');
    var totalCost = 0;

    totalCost = quantity * price;
    totalCost = totalCost + shipping;
    totalCost = totalCost + (totalCost * (tax / 100));
    totalCost = (quantity > 100) ? totalCost - (discount * 2) : totalCost - discount;
    total.value = totalCost.toFixed(2);
}