Requisito: Solicitud de Colectivo en Tiempo Real

  Escenario: Solicitud exitosa de un colectivo
    Dado que el usuario tiene la ubicación GPS activada
    Y selecciona una línea disponible con cupos
    Cuando confirma la solicitud de abordaje desde su posición actual
    Entonces el sistema debe buscar un colectivo cercano disponible
    Y mostrar los datos del vehículo, conductor y tiempo estimado de llegada (ETA)

  Escenario: Intento de reserva sin cupos disponibles
    Dado que todos los colectivos de la línea elegida están completos
    Cuando el usuario intenta solicitar un vehículo
    Entonces la app debe notificar que no hay cupos en ese momento
    Y ofrecer la opción de suscribirse a una alerta de disponibilidad