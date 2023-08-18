function toggleContent(contentId) {
  const contents = document.querySelectorAll('div[id^="content"]');
  contents.forEach(content => {
    if (content.id === contentId) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });

  const summaries = document.querySelectorAll('summary');
  summaries.forEach(summary => {
    if (summary.getAttribute('aria-expanded') === 'true') {
      summary.removeAttribute('aria-expanded');
    }
  });

  const currentSummary = document.querySelector(`summary[onclick="toggleContent('${contentId}')]`);
  currentSummary.setAttribute('aria-expanded', 'true');

  
}

function toggleContent(contentId, event) {
 
  var groups = document.querySelectorAll('.group');

  groups.forEach(function(group) {
    var details = group.querySelector('.details2');
    var div = group.querySelector('div');

    if (div.getAttribute('id') === contentId) {
      group.classList.toggle('with-distance'); // Adiciona ou remove a classe 'with-distance' no grupo atual
      details.open = !details.open;
    } else {
      group.classList.remove('with-distance'); // Remove a classe 'with-distance' dos outros grupos
      details.open = false;
    }
  });

  if (event.target.tagName.toLowerCase() === 'summary') {
    event.stopPropagation();
  }


}

var summaries = document.querySelectorAll('summary');
summaries.forEach(function(summary) {
  summary.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

