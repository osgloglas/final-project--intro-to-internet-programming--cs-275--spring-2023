//matrix and functions
const getMatrix = (userInput) => {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(userInput) || userInput < 2)
        {
            // eslint-disable-next-line max-len
            reject(new Error(`Invalid size. Please enter an integer greater than 1.`));
        }
        else
        {
            const matrix = [];
            for (let i = 0; i < userInput; i++) {
                matrix[i] = [];
                for (let j = 0; j < userInput; j++) {
                    matrix[i][j] = i * userInput + j + 1;
                }
            }
            resolve(matrix);
        }
    });
};

// matrix is defined above, not sure why this is an error
// eslint-disable-next-line no-undef
const tempArray = [matrix.length];
const printMatrix = (matrix) => {
    let tableHtml = `<table>`;
    for (let i = 0; i < matrix.length; i++) {
        tableHtml += `<tr>`;
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j === matrix.length - 1)
            {
                // eslint-disable-next-line max-len
                tableHtml += `<td style="background-color: yellow;">${matrix[i][j]}</td>`;
                tempArray[i] = matrix[i][j];
            }
            else
            {
                tableHtml += `<td>${matrix[i][j]}</td>`;
            }
        }
        tableHtml += `</tr>`;
    }
    tableHtml += `</table>`;
    document.getElementById(`matrix`).innerHTML = tableHtml;
};

const printReversedMatrix = (matrix) => {
    let tableHtml = `<table>`;
    for (let i = matrix.length - 1; i >= 0; i--) {
        tableHtml += `<tr>`;
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            if (i + j === matrix.length - 1)
            {
                // eslint-disable-next-line max-len
                tableHtml += `<td style="background-color: yellow;">${tempArray[matrix.length - 1 - i]}</td>`;
            }
            else
            {
                tableHtml += `<td>${matrix[i][j]}</td>`;
            }
        }
        tableHtml += `</tr>`;
    }
    tableHtml += `</table>`;
    document.getElementById(`matrix`).innerHTML += tableHtml;
};

const promptForSize = () => {
    const sizeString = window.prompt(`Enter the size of the matrix:`);
    const size = parseInt(sizeString);
    if (!Number.isInteger(size) || size < 2)
    {
        alert(`Invalid size. Please enter an integer greater than 1.`);
        promptForSize();
    }
    else
    {
        getMatrix(size)
            .then(matrix => {
                printMatrix(matrix);
                return matrix;
            })
            .then(matrix => printReversedMatrix(matrix))
            .catch(error => alert(error.message));
    }
};

promptForSize();

// function is necessary for button
// eslint-disable-next-line no-unused-vars
const openMatrix = () => {
    promptForSize();
};
