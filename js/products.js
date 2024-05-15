function completeBuy(productName) {
   
    // Display a confirmation message
    const fullName = document.getElementById('buyFullName').value;
    alert(`Thank you, ${fullName}! Your order is complete.`);
    document.getElementById('myForm').reset();

    // Close the modal
    $('#buyConfirmationModal').modal('hide');   
}

function nextPage() {
    // Redirect to another PHP file
    window.location.href = 'all_products.php';
}

