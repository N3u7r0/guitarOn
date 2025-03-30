# GuitarON

Bienvenido a **GuitarON**, una aplicación creada con React y Firebase. Este archivo README proporciona detalles sobre las dependencias necesarias y los custom hooks que utiliza la aplicación.

### Authors
- [@Brian Fabian Sabatini](https://n3u7r0.github.io/Brian-Sabatini--Repositorio/)


## Dependencias
Este proyecto requiere las siguientes dependencias:
- **npm**
- **react-router-dom**
- **chakra-ui**
- **firebase**
- **react-firebase-hook**
- **react-icons**
### Instalación
Para instalar todas las dependencias, ejecuta el siguiente comando:
```bash
npm i
```

#### Custom Hooks

 ### useProducts, useProductsBy, useProductsOffer.

Estos hooks trae los productos desde firebase, los mismo se encargan en guardar los mismo en el contexto para evitar que los llamen constante mente, los mismos retornan los objeto de produtos y el loading que se usa para manejar el spin de carga.

### useCreateUser.

Custom hook que gestiona el registro de usuarios y formularios usando Firebase. Permite:

Registro de usuario: Crea usuarios con Firebase Authentication

Almacenamiento de datos: Guarda información en Firestore.

Manejo de formularios: Actualiza valores con handleInputChange()

Uso:
```javascript
 const { SignUp, handleInputChange, formValues } = useCreateUser();
```

Ideal para integrar en aplicaciones React con Firebase.

### useLoginUser

Custom hook en React para gestionar el inicio de sesión de usuarios con Firebase Authentication. Incluye:

Inicio de sesión: Verifica credenciales con signInWithEmailAndPassword de firebase.

Manejo de estado: Controla el estado de carga y las credenciales del usuario.

uso:
```javascript
 const { login, loading, handleInputChange, credentials } = useLoginUser();
```
Permite una integración sencilla de inicio de sesión en aplicaciones React con Firebase.

### useLogutUser

este hook permite deslogear al usuario de manera segura, si la operacion fue exitosa el mismo avisa por medio de la tostada.
(componente).
el mismo se encarga de limpiar el carrito de compras

### useCheckLoginUser

custom Hook que escucha si el usuario esta logeado o no, sirve para tenerlo como condicion de renderizado.
si el usuario no esta retorna null, de lo contrario retorna datos como por ej el id (uid).

uso:
```javascript
 {userCheck ? <CustomMenuItem onClick={logOut}>LogOut</CustomMenuItem> : <BtnLogin />}

```

### useDataUser

Custom hook en React que obtiene recuperación de datos del usuario desde Firebase, tiene la particularidad de navegar al home si no encuentra los datos. Funcionalidades principales:

Autenticación: Detecta cambios en el estado de autenticación mediante onAuthStateChanged()
Datos del usuario: Recupera y guarda en el contexto la información almacenada en Firestore.
Manejo de estado: Controla el estado de carga y limpia los datos al cerrar sesión.

Uso:
```javascript
const { userDataContext, loading } = useDataUser();
```
