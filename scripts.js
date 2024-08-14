function showPhoneNumber() {
    document.getElementById('phoneModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('phoneModal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('phoneModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
