const button = document.querySelector( '#hamburger' );
const spans = button.querySelectorAll( 'span' );
const sidebar = document.getElementById( 'sidebar' );

// Add click event listener to document
document.addEventListener( 'click', function ( event ) {
  // Check if the click is outside the div
  if ( button.classList.contains( 'open' ) ) {
    if ( !button.contains( event.target ) && !sidebar.contains( event.target ) ) {
      handleSidebar();
      transformButton();
    }
  }
} );

// Add click event listener to document
button.addEventListener( 'click', () => {
  handleSidebar();
  transformButton();
} );

function handleSidebar() {
  sidebar.classList.toggle( 'translate-x-full' );
  sidebar.classList.toggle( 'translate-x-0' );
}

function transformButton() {

  button.classList.toggle( 'open' );

  if ( button.classList.contains( 'open' ) ) {
    // Transform to X
    spans[ 0 ].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[ 1 ].style.opacity = '0';
    spans[ 2 ].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    // Back to hamburger
    spans[ 0 ].style.transform = 'rotate(0) translate(0, 0)';
    spans[ 1 ].style.opacity = '1';
    spans[ 2 ].style.transform = 'rotate(0) translate(0, 0)';
  }
}