Requisito: Selección y Consulta de Líneas de Colectivo

  Escenario: Agregar una línea a favoritos
    Dado que el usuario está en el buscador de líneas
    Cuando busca la "Línea 5000" y la selecciona
    Y presiona el botón "Agregar a Favoritos"
    Entonces la línea debe quedar guardada en su sección de accesos directos

  Escenario: Consultar trazado de recorrido y tarifa
    Dado que el usuario selecciona una línea de colectivo
    Cuando consulta los detalles de la ruta
    Entonces la app debe mostrar el mapa con el trazado de la línea
    Y el valor actualizado de la tarifa por tramo