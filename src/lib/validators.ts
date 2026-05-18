export function validateParticipant(p: any, isSolo = false) {
    const errors: string[] = [];

    if (!p.participant_names?.trim()) errors.push("Los nombres son obligatorios.");
    if (!p.participant_last_names?.trim()) errors.push("Los apellidos son obligatorios.");
    if (!Number.isInteger(p.participant_age) || p.participant_age < 18) errors.push("La edad debe ser mayor o igual a 18.");
    if (!/^\d{8}$/.test(p.participant_dni)) errors.push("El DNI debe tener 8 dígitos.");
    if (!/^9\d{8}$/.test(p.participant_tlf)) errors.push("El teléfono debe tener 9 dígitos y empezar con 9.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.participant_email)) errors.push("El correo no tiene un formato válido.");
    if (!p.participant_uni) errors.push("La universidad es obligatoria.");
    if (!p.participant_career?.trim()) errors.push("La carrera es obligatoria.");

    if (isSolo && !p.participant_info?.trim()) {
        errors.push("La información adicional es obligatoria para participantes que buscan equipo.");
    }

    return errors;
}