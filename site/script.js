document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️';  // Switch to sun icon
    } else {
        this.textContent = '🌙';  // Switch back to moon icon
    }
});
