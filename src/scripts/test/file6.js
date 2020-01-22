
function main() {
    let grid = [
        [1,0,0,0,0]
      , [0,1,0,0,0]
      , [0,0,1,0,0]
      , [0,0,0,1,0]
      , [0,0,0,0,1]
    ];

    let numOfDays = 0;

    while(!checkIfAll1s(grid, 5, 5)) {
        let grid2 = JSON.parse(JSON.stringify(grid));

        updateGrid(grid, grid2, 5, 5);

        grid = JSON.parse(JSON.stringify(grid2));
        numOfDays++;
    }

    return numOfDays;
}

function checkIfAll1s(grid, rows, columns) {
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            if(grid[i][j] == 0) return false;
        }
    }

    return true;
}

function updateGrid(grid, grid2, rows, columns) {
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            if(grid[i][j] == 1) {
                if(i-1 >= 0) grid2[i-1][j] = 1;
                if(i+1 < rows) grid2[i+1][j] = 1;
                if(j-1 >= 0) grid2[i][j-1] = 1;
                if(j+1 >= 0) grid2[i][j+1] = 1;
            }
        }
    }
}

console.log(main());

