window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginBtn')?.addEventListener('click', () => {
    const user = document.getElementById('usuarioInput').value.trim();
    const pass = document.getElementById('passwordInput').value.trim();
    const loginError = document.getElementById('loginError');

    if (pass === 'centrotipi' && user !== '') {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('seleccionAlumno').style.display = 'block';
      loginError.style.display = 'none';
      sessionStorage.setItem('terapeuta', user);
    } else {
      loginError.style.display = 'block';
    }
  });

  document.getElementById('accederMenuBtn')?.addEventListener('click', () => {
    const alumno = document.getElementById('alumnoSelect').value;
    const terapeuta = sessionStorage.getItem('terapeuta') || 'Terapeuta';
    if (alumno) {
      document.getElementById('seleccionAlumno').style.display = 'none';
      document.getElementById('menuPrincipal').style.display = 'block';
      document.getElementById('bienvenidaUsuario').textContent = 'Bienvenido/a';
      document.getElementById('nombreAlumno').textContent = 'Trabajando con: ' + alumno;
    }
  });

  document.getElementById('registroBtn')?.addEventListener('click', () => {
    document.getElementById('terapeutaSpan').textContent = sessionStorage.getItem('terapeuta') || 'Terapeuta';
    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('areaTrabajo').style.display = 'block';
  });
});