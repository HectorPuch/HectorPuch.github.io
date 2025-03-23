# Formularios

Todo formulario debe ir dentro de una etiqueta `**<form>**`. Si un botón no está dentro de un formulario, no tiene contexto. Un `**<form>**` es una etiqueta de caja o elemento en bloque.

## Ejemplo de formulario 1

```html
<form>
<p><input type="text" name="nombre" /></p>
<p><input type="number" name="edad" value="18" min="1" max="120" /></p>
<p><input type="submit" /></p>
</form>
```

## Explicación del formulario (parte 1)

Los `**<input>**` son elementos en línea y deben ir dentro de elementos en bloque semántico. Las etiquetas `**<input>**` son unitarias y necesitan al menos dos campos. Si no ponemos nada, por defecto, utiliza `**type="text"**`. Hay otra propiedad necesaria parae poder trabajar que es el campo `**name="nombre"**`. Mientras que `**type="text"**` indica el tipo de campo, `**name="edad"**` es la propiedad del campo. Hay una etiqueta específica para poner la información denominada `**placeholder**`. El `**value="18"**` es el valor que queremos que aparezca por defecto y podemos modificarlo y leerlo.

## Ejemplo de formulario 2

```html
<form>
<p><input type="password" name="pass" /></p>
<p><input type="submit" /></p>
</form>
```

## Ejemplo de formulario 3

```html
<form>
<p><label for="campo-nombre">Nombre</label><input type="text" name="nombre" id="campo-nombre" /></p>
<p><label>Contraseña</label<input type="password" name="pass" id="campo-contraseña" /></p>
<p><input type="date" name="nacimiento" /></p>
<p><input type="number" name="edad" value="18" min="1" max="120" /></p>
<p><input type="color" name="favorito" /></p>
<p><input type="checkbox" name="subscribe" id="subscribe" /><label for="subscribe">Suscríbete para recibir un email semanal sobre Ciberseguridad</label></p>
<p><input type="submit" /></p>
</form>
```

## Explicación del formulario (parte 2)

Todo elemento dentro de una página puede tener un **id**. Estos, pueden ser utilizados por CSS para cambiar un elemento único pero también en HTML pueden interactuar con otros elementos HTML mediante su **id**. Los **id** se pueden poner con guión. Los `**<label>**` permiten que los lectores de pantalla identifiquen y anuncien correctamente el propósito de cada campo. También, ayuda a que el código HTML sea más claro y organizado. El atributo **for** en un `**<label>**` debe coincidir con el **id** del campo del formulario al que hace referencia. Esto crea una asociación entre la etiqueta y el campo de entrada, lo que mejora la accesibilidad y la usabilidad. 
