document.addEventListener('DOMContentLoaded', function() {
    const plusIcon = document.getElementById('netflix-plus-icon');
    const description = document.getElementById('netflix-description');

    plusIcon.addEventListener('click', function() {
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            plusIcon.textContent = '-';
        } else {
            description.style.display = 'none';
            plusIcon.textContent = '+';
        }
    });
});
