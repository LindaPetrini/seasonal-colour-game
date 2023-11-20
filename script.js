const palettes = {
    'Bright Winter': ['#5cc8d7', '#00949a', '#0084bd', '#b7e2dc', '#6f7bb4', '#c0428a', '#7b2946', '#ec8b8e', '#e7decf', '#28282d', '#f2e6b2', '#bfb4cb', '#333e83', '#f4f9ff', '#f7d1d0', '#8b3473', '#d84d70', '#4d4b50', '#f4d5e6', '#54b264', '#d61a4e', '#2aa8d6', '#aaa699', '#817d7c', '#817d7c'],
    'Cool Winter': ['#fefefe', '#99d6ea', '#f8e59a', '#f395c7', '#59cbe8', '#9bb8d3', '#00a3e1', '#808286', '#009775', '#00b0b9', '#0082ba', '#0086d6', '#0072ce', '#0057b8', '#004b87', '#484a51', '#84329b', '#963cbd', '#c724b1', '#da1884', '#e3006d', '#ce0037', '#aa0061', '#890c58', '#131413'],
    'Deep Winter': ['#FEFEFE', '#B8C8E1', '#0096CA', '#0086D6', '#027FA2', '#01607F', '#0057B8', '#004B87', '#84329B', '#963CBD', '#C723B1', '#DA1784', '#E3006D', '#CE0037', '#AA0160', '#991E68', '#880C58', '#5C068C', '#009775', '#009F4D', '#00594B', '#012D72', '#011E62', '#131413', '#331902'],
    'Soft Summer': ['#71C5E7', '#A7A2C2', '#9595D1', '#009CA6', '#474A50', '#A83D71', '#F65275', '#FFA3B4', '#F1BDC8', '#9BCBEB', '#6DCDB8', '#9CAE88', '#A29382', '#C4A4A6', '#D592AA', '#7F8286', '#A177A6', '#A05EB5', '#A05A95', '#86637A', '#7C6992', '#57728B', '#5C82A5', '#769FB5', '#9BB8D2'],
    'Cool Summer': ['#E21C79', '#E21C79', '#BF0D3E', '#AC1359', '#93328E', '#963CBD', '#7965B2', '#0177C8', '#00A8E0', '#71C5E8', '#00AFB9', '#00A376', '#7F8286', '#A177A6', '#C963CF', '#E277CD', '#F57DB6', '#C4A4A6', '#BCBDBE', '#F394C7', '#57728B', '#003057', '#474A50', '#016F62', '#007681', '#EF60A3'], 
    'Light Summer': ['#6787B7', '#F67499', '#C963CF', '#A05EB5', '#7F8286', '#A29382', '#CDB5A7', '#C4BFB6', '#CF92B7', '#9595D1', '#9BB8D2', '#AC96DC', '#F57DB6', '#DC9CDF', '#ECB3CB', '#C6D9E7', '#B8C8E1', '#99D5EA', '#9BCBEB', '#71C5E7', '#5AC2E7', '#6DCDB8', '#25D07C', '#3E6991', '#57728B'], 
    'Clear Spring': ['#A67BCA', '#76C5D5', '#00A499', '#008EAA', '#0287AE', '#027FA2', '#00558C', '#84329B', '#963CBD', '#D439B5', '#FF8200', '#FF8D6C', '#FEAA62', '#FEB81D', '#FFCD00', '#FDD26E', '#D0DF00', '#FCE300', '#FFF9D6', '#443536', '#5C462B', '#E40145', '#D9291C', '#BE5400', '#A6631A'], 
    'Warm Spring': ['#B46A54', '#A6631A', '#963CBD', '#9595D1', '#6DCDB8', '#2ECCD3', '#00A499', '#009F4D', '#6CC24A', '#74AA4F', '#A8AD00', '#A9C23F', '#C3D500', '#D4C301', '#F0B223', '#FEB81D', '#FFCD00', '#FCE300', '#FDD26E', '#FFA38B', '#FDAA62', '#FF8F1D', '#FF8200', '#EB4F37', '#D9291C'], 
    'Light Spring': ['#6DB547', '#BFA392', '#CDA077', '#D9B38F', '#D3BC8D', '#CAC7A7', '#D7A9E2', '#C5B4E3', '#9BCBEB', '#A3DAE8', '#A5DED3', '#D0DEBB', '#D9E99A', '#FBDB65', '#FCC89B', '#F7CFA9', '#F5E1A4', '#F1EB9B', '#FFF9D6', '#6DCDB8', '#2ECCD3', '#F9A98D', '#FDAA62', '#FF8D6C', '#9595D1'], 
    'Soft Autumn': ['#507F70', '#4F817D', '#52453F', '#7B4D39', '#945F37', '#956C58', '#C05130', '#C26E60', '#DB864D', '#B58150', '#AD8978', '#94795D', '#889064', '#A09957', '#A2AA83', '#BBC591', '#DFD0A7', '#FBD298', '#F5E1A4', '#CAA051', '#FDAA62', '#D9B38F', '#D6B395', '#6BCABA', '#009F4D'], 
    'Warm Autumn': ['#D6992E', '#F68D2D', '#EE7201', '#EB4F37', '#C3612D', '#5C462B', '#993224', '#7B4D39', '#9C4816', '#945F37', '#A6631A', '#9F7400', '#7A7156', '#5E7E28', '#8F993E', '#A09957', '#B89D18', '#B4A820', '#FFCD00', '#1F5C40', '#036938', '#01778B', '#009F4D', '#01BFB3', '#6BCABA'], 
    'Deep Autumn': ['#963CBD', '#015A70', '#00767F', '#027FA2', '#0287AE', '#00A3AD', '#009F4D', '#66823A', '#5C6439', '#5C462B', '#63513D', '#7B4D39', '#993224', '#BD4D01', '#9F7400', '#C3612D', '#FF8200', '#DAAA00', '#C3D500', '#00594B', '#5C068C', '#7B2429', '#643335', '#880C58', '#EB4F37']
    // 'Test-1': ['#507F70', ],
    // 'Test-2': ['#963CBD']
};


let chosenPalette;
let otherPalettes = [];
let randomPaletteName;


function startGame() {
    chosenPalette = palettes[document.getElementById('paletteChooser').value];
    otherPalettes = Object.values(palettes).filter(p => p !== chosenPalette);
    document.getElementById('paletteSelection').style.display = 'none';
    nextRound();
}

function nextRound() {
    
    const currentLearningColor = chosenPalette[Math.floor(Math.random() * chosenPalette.length)];
    const randomPaletteIndex = Math.floor(Math.random() * otherPalettes.length);
    const randomPalette = otherPalettes[randomPaletteIndex];
    randomPaletteName = Object.keys(palettes).filter(p => palettes[p] === randomPalette)[0].replace('_', ' ');

    const randomColor = randomPalette[Math.floor(Math.random() * randomPalette.length)];
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    // updateMessage(""); // Clear the message
    if (Math.random() < 0.5) {
        color1.style.backgroundColor = currentLearningColor;
        color2.style.backgroundColor = randomColor;
        color1.onclick = correctChoice;
        color2.onclick = wrongChoice;
    } else {
        color1.style.backgroundColor = randomColor;
        color2.style.backgroundColor = currentLearningColor;
        color1.onclick = wrongChoice;
        color2.onclick = correctChoice;
    }
  
}

function correctChoice() {
    updateMessage("Correct!");
    nextRound();
}

function wrongChoice() {
    updateMessage(`That color is from the "${randomPaletteName}" palette. Try again.`);
    
}


function updateMessage(text) {
    document.getElementById('message').innerText = text;
}


// Populate palette choices and start the game
window.onload = function() {
    const paletteChooser = document.getElementById('paletteChooser');
    for (const palette in palettes) {
        const option = document.createElement('option');
        option.value = palette;
        option.text = palette.charAt(0).toUpperCase() + palette.slice(1);
        paletteChooser.appendChild(option);
    }
};

// Start the game with the first round
