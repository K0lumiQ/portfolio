(function () {
  var grid = document.getElementById('grid');
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  grid.innerHTML = (window.WORKS || []).map(function (w) {
    return '<article class="card">' +
      '<div class="shot"><img src="' + esc(w.preview) + '" alt="Превью: ' + esc(w.title) + '" loading="lazy" onerror="this.remove()"></div>' +
      '<div class="body">' +
        '<h3>' + esc(w.title) + '</h3>' +
        '<p>' + esc(w.description) + '</p>' +
        '<ul class="tags">' + w.stack.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        '<div class="links">' +
          '<a class="btn" href="' + encodeURI(w.live) + '">Смотреть</a>' +
          (w.code ? '<a class="btn ghost" href="' + esc(w.code) + '">Код</a>' : '') +
        '</div>' +
      '</div></article>';
  }).join('');
})();
