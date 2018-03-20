/**
 * Handles test page behaviour
 */

const switchLink = document.querySelector('#switch');
if(window.location.search.includes('specimin')) {
    switchLink.innerHTML = 'Switch to test your code';
    switchLink.onclick = () => {
        window.location.search = '';
    }
} else {
    switchLink.innerHTML = 'Switch to specimin';
    switchLink.onclick = () => {
        window.location.search = '?specimin=1';
    }
}
