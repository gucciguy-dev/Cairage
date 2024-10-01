document.addEventListener('DOMContentLoaded', function () {
    const car = document.getElementById('car');
    
    // Areas of the car corresponding to mod suggestions
    const areas = [
        { id: 'hood-popup', bounds: { x: [0.07, 0.3], y: [0.25, 0.55] } },  
        { id: 'roof-popup', bounds: { x: [0.7, 0.98], y: [0.2, 0.3] } },    
        { id: 'front-wheel-popup', bounds: { x: [0.2, 0.6], y: [0.55, 0.85] } }, 
        { id: 'rear-wheel-popup', bounds: { x: [0.65, 0.98], y: [0.5, 0.99] } },  
    ];

    car.addEventListener('mousemove', function (e) {
        const rect = car.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Check which area the mouse is hovering over and show the corresponding popup
        let popupShown = false;
        areas.forEach(area => {
            const { id, bounds } = area;
            if (x >= bounds.x[0] && x <= bounds.x[1] && y >= bounds.y[0] && y <= bounds.y[1]) {
                document.getElementById(id).style.display = 'block';
                popupShown = true;
            } else {
                document.getElementById(id).style.display = 'none';
            }
        });

        if (!popupShown) {
            areas.forEach(area => {
                document.getElementById(area.id).style.display = 'none';
            });
        }
    });

    car.addEventListener('mouseleave', function () {
        areas.forEach(area => {
            document.getElementById(area.id).style.display = 'none';
        });
    });
});
