// Add smooth scrolling for navigation
document.querySelectorAll('.navigation a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});

// Add some interactive hover effects
document.querySelectorAll('.demo-item').forEach(item => {
	item.addEventListener('mouseenter', function() {
		this.style.transform = 'scale(1.1) rotate(5deg)';
		this.style.transition = 'transform 0.3s ease';
	});

	item.addEventListener('mouseleave', function() {
		this.style.transform = 'scale(1) rotate(0deg)';
	});
});

// Copy code block to clipboard
function copyCode(btn) {
    const pre = btn.parentElement.querySelector('pre');
    if (!pre) return;
    const code = pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy'), 1200);
    });
}
