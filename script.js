document.getElementById('formulario-calorias').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const peso = parseFloat(document.getElementById('peso').value);
    const objetivo = document.getElementById('objetivo').value;

    
    const factoresCalorias = [
        { objetivo: 'deficit', factor: -500 },
        { objetivo: 'volumen', factor: 500 },
        { objetivo: 'recomposicion', factor: 0 }
    ];

    
    const factorSeleccionado = factoresCalorias.find(f => f.objetivo === objetivo);

    
    const factorCalorias = factorSeleccionado ? factorSeleccionado.factor : 0;

    
    const caloriasBase = peso * 25; 
    const caloriasDiarias = caloriasBase + factorCalorias;

    
    document.getElementById('salida-calorias').textContent = caloriasDiarias.toFixed(0);
});
