# 🛒 Comercio Pokémon - TP Final React

Una aplicación web moderna desarrollada con React que simula un comercio de cartas Pokémon, implementando las mejores prácticas de desarrollo frontend.

## 🚀 Características Implementadas

### ✅ Completadas

- **🏠 Página de Inicio** - Presentación del sitio y navegación
- **📜 Listado de Pokémon** - Grid responsive con paginación
- **🛒 Sistema de Carrito** - Agregar, remover y gestionar cantidades
- **❤️ Sistema de Favoritos** - Toggle para marcar Pokémon favoritos
- **📱 Diseño Responsive** - Adaptable a móviles, tablets y desktop
- **🔄 Paginación** - Botón "Cargar más" con infinite scroll implícito

### 🔄 En Desarrollo

- [ ] 🔍 Página de Detalles de Pokémon
- [ ] ⚔️ Sistema de Comparación

## 🛠️ Tecnologías Utilizadas

- **⚛️ React 19** - Biblioteca principal
- **🎨 Bootstrap 5** - Framework CSS y componentes
- **🔄 Redux Toolkit** - Gestión de estado global
- **🧭 React Router DOM** - Navegación entre páginas
- **💾 LocalStorage** - Persistencia de datos
- **🌐 PokeAPI** - Fuente de datos de Pokémon

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/LukeSilvestre/tp-final-react-lucas-silvestre.git

# Navegar al directorio
cd tp-final-react-lucas-silvestre

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

#### 🎯 Estructura del Proyecto

src/
├── components/ # Componentes reutilizables
│ ├── PokemonCard/ # Card individual de Pokémon
│ ├── Navbar/ # Navegación principal
│ ├── CarritoPage/ # Página del carrito
│ └── FavoritesPage/ # Página de favoritos
├── pages/ # Páginas principales
├── store/ # Configuración de Redux
│ └── slices/ # Slices del estado
├── services/ # APIs y servicios externos
└── utils/ # Utilidades y helpers

#### 🔧 Estado de Redux:

La aplicación utiliza Redux Toolkit para gestionar:

- pokemones[] - Lista de Pokémon cargados
- favoritos[] - Pokémon marcados como favoritos
- cart[] - Items en el carrito con cantidades
- pagination - Control de paginación(Carga mas pokemones)
- loading - Estados de carga

#### 👨‍💻 Autor

Lucas Silvestre
GitHub: @LukeSilvestre
Proyecto: TP Final React

#### 📄 Licencia - Estudiante

Este proyecto fue desarrollado como Trabajo Práctico Final para el curso de React.
