fetch('http://tarari.github.io/pages')
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
      const link = document.createElement('a');
      link.href = `pages/${file}`;
      link.textContent = file;
      document.body.appendChild(link);
    });
  });
