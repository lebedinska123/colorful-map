
const ClassNames = {
    mapContainer: 'colorful-map-container',
    row: 'row',
    cell: 'cell',
};

const Selector = {
    mapContainer: `.${ClassNames.mapContainer}`,
};

const DEFAULT_CELL_COLOR = '#566573';

let colorfulMapContainer = document.querySelector(Selector.mapContainer);

function fillMap(sizeX, sizeY) {
    for (let y = 0; y < sizeY; y++) {
        let row = document.createElement('div');
        row.className = ClassNames.row;
        colorfulMapContainer.append(row);

        for (let x = 0; x < sizeX; x++) {
            let cell = document.createElement('div');
            cell.className = ClassNames.cell;
            row.append(cell);

            cell.addEventListener('mouseover', onMouseoverCell);
            cell.addEventListener('mouseleave', onMouseleaveCell);
        }
    }
}

function onMouseoverCell(event) {
    let color = `#${(Math.round(Math.random() * 16777215).toString(16))}`;
    
    event.target.style.backgroundColor = color;
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function onMouseleaveCell(event) {
    event.target.style.backgroundColor = DEFAULT_CELL_COLOR;
    event.target.style.boxShadow = 'none';
}

fillMap(20, 20);