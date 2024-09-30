## GuitarON

Proyecto de react para coderHouse.

el componente CategoryFillter es un componente de React que se encarga de renderizar una lista de productos filtrados por categoría. Utiliza el hook useProductsByCategory para obtener la lista de productos de una categoría específica.

el componente tiene dos estados:

Loading: un estado que indica si la lista de productos está siendo cargada.
ProductsFillter: la lista de productos filtrados por categoría.
Si la lista de productos está siendo cargada, la componente renderiza un spinner de carga. De lo contrario, renderiza la lista de productos utilizando el componente ItemListContainer.

ItemListContainer

el componente ItemListContainer es un componente de React que se encarga de renderizar una lista de productos. Recibe la lista de productos como prop y la renderiza en una lista.

Hooks

useProductsByCategory: un hook que devuelve la lista de productos de una categoría específica. Se utiliza en la componente CategoryFillter para obtener la lista de productos filtrados por categoría.
useColorMode: un hook que devuelve el modo de color actual de la aplicación (claro u oscuro). Se utiliza en la componente NavBar para cambiar el modo de color de la aplicación.


<!-- esto fue generado por ia, como para tener algo, pero voy a modificar -->
