$('h1').css('color', 'red')

console.log($('img').attr('src'))

$('a').attr('href', 'https://www.yahoo.com')

//Adding Event Listeners with jQuery
$('h1').click(function () {
	$('h1').css('color', 'purple')
})

$('button').click(function () {
	$('h1').css('color', 'purple')
})

$(document).keypress(function (event) {
	$('h1').text(event.key)
})

$('h1').on('mousover', function () {
	$('h1').css('color', 'purple')
})

// Adding and Removing Elements with jQuery
// $('h1').before('<button>New</button>')
// $('h1').after('<button>New</button>')
// $('h1').prepend('<button>New</button>')
// $('h1').append('<button>New</button>')

// $('button').remove()

// Website Animations with jQuery - https://www.w3schools.com/jquery/jquery_ref_effects.asp
$('button').on('click', function () {
	$('h1').fadeToggle()
})
