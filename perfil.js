  fetch('/api/usuario')
      .then(res => res.json())
      .then(data => {
        document.getElementById('fotoPerfil').src = '/static/' + data.fotoPerfil;
        document.getElementById('nombreUsuario').textContent = data.nombre;

        const likesDiv = document.getElementById('likes');
        data.likes.forEach(f => {
          const img = document.createElement('img');
          img.src = '/static/' + f;
          img.className = 'miniFoto';
          likesDiv.appendChild(img);
        });

        const amigosDiv = document.getElementById('amigos');
        data.amigos.forEach(f => {
          const img = document.createElement('img');
          img.src = '/static/' + f;
          img.className = 'miniFoto';
          amigosDiv.appendChild(img);
        });
      });