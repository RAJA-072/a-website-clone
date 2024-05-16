/* script.js */
const cursors = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursors.style.top = e.pageY + 'px';
    cursors.style.left = e.pageX + 'px';
});
const cursor = document.querySelector('.cursor');

// Function to hide the cursor
function hideCursor() {
  cursor.style.display = 'none';
}
