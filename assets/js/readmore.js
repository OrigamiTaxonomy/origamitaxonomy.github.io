function openPDF(filePath) {
  window.open(filePath, '_blank');
}

// read read
document.addEventListener('DOMContentLoaded', function() {
  var content = document.querySelector('.read-more-div');
  var readMore = document.querySelector('.read-more');

  readMore.addEventListener('click', function(e) {
    e.preventDefault();
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      content.style.maxHeight = 'none';
      readMore.textContent = 'read less';
    } else {
      content.style.maxHeight = '6em'; // Adjust to match your CSS max-height
      readMore.textContent = '... read more';
    }
  });
});

// Hide the read more if five lines or less
function checkAndToggleReadMore() {
  var contentElement = document.getElementById('overview');
  var readMoreElement = document.getElementById('read-more');

  // Check the line count
  var lineCount = contentElement.getBoundingClientRect().height / parseFloat(getComputedStyle(contentElement).lineHeight);

  // Show or hide "read more" based on the line count
  if (lineCount > 5) {
    readMoreElement.style.display = 'block';
  } else {
    readMoreElement.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial check
  checkAndToggleReadMore();

  // Add event listener for window resize
  window.addEventListener('resize', checkAndToggleReadMore);
});
