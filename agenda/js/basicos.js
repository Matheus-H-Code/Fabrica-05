$( document ).ready(function() {
    let templatenavbar = navbar;

    $("#navbarPadrao").append(templatenavbar);

	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
