# React + Vite / React-Router-Dom
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-blue?style=flat&logo=react&logoColor=%23FFFFFF&color=blue)
![Vite](https://img.shields.io/badge/vite-white?style=flat&logo=vite&logoColor=%23FFFFFF&color=E452CC)
![Static Badge](https://img.shields.io/badge/React-Router?logo=React-Router&label=React-Router&labelColor=black&color=black)

### Link de GitHub Pages: <a>https://spiderpaul.github.io/heroes/</a>


# Descripción
Este proyecto es sitio web SPA realizado utilizando las librerías de <b>React y React-Router</b> para el manejo de rutas (rutas públicas y rutas privadas). Se ha trabajado también con una <b>sesión de usuario</b> aunque el sitio no cuenta con una autenticación de usuario, pero si con un login. Las pruebas del proyecto por su parte, se realizan con las librerías <b>Jest + React Testing Library</b>.

# Video de muestra de proyecto

https://github.com/Spiderpaul/heroes/assets/87204262/c12e1ed0-207c-4198-a347-0339e51981c7

# Importante
Si bajas el proyecto para correrlo en tu entorno local, deberás ir al archivo <b>vite.config</b> y comentar el <b>base</b> para evitar conflictos, como se muestra a continuación:
<br/>
![image](https://github.com/Spiderpaul/heroes/assets/87204262/9f1e5574-eeab-4277-b296-d887dcd78cd7)
![image](https://github.com/Spiderpaul/heroes/assets/87204262/5f4dd108-09c9-49ac-9c7f-c396ba95ce52)


Dentro del archivo <b>HeroPage.jsx</b> que se encuentra en la ruta <code>src/heroes/pages/HeroPage.jsx</code>, dentro del retorno del componente funcional, tendrás que modificar la URL <code>`/heroes/img/${ hero.id }.jpg`</code> de la etiqueta <b>img</b>, eliminandole <b>"/heroes"</b>. Debe verse de la siguiente forma: 
<br/>
![image](https://github.com/Spiderpaul/heroes/assets/87204262/c7eaa75d-c7ec-425a-9129-3af09624b965)

Y lo mismo debes hacer en el archivo <b>HeroCard</b> que se encuentra en la ruta <code>src/heroes/components/HeroCard.jsx</code>. Debe verse de la siguiente forma:
<br/>
![image](https://github.com/Spiderpaul/heroes/assets/87204262/fee64dfa-b37d-424e-8091-0a1767415b45)

Y listo, ejecutas el comando <code>yarn dev</code> en la consola y deberá correr el proyecto sin errores en tu servidor local.

# Tecnologías utilizadas
<ul>
  <li>JavaScript</li>
  <li>React + Vite</li>
  <li>React-Router</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>HTML5</li>
  <li>Bootstrap</li>
  <li>Git</li>
  <li>GitHub</li>
</ul>

# Gracias
Gracias por visitar mi GitHub.
