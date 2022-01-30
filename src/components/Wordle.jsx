import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Wordle(){
   const [gameGrid, setGameGrid] = useState([]);
   const [focusRow, setFocusRow] = useState(0);
   const [isGameOver, setIsGameOver] = useState(false);

   useEffect(() => {
       
      // ? We create the grid to play the game
      function initializeGrid(){
         let wordGrid = [];

         for (let i = 0; i < 6; i++){
            wordGrid.push([]);

               for (let j = 0; j < 5; j++){
                  wordGrid[i].push({letter: "", status: "empty"})
               }
         }
         setGameGrid(wordGrid);
      }

      if (gameGrid.length === 0) initializeGrid();
   });

   	const handleKeypress = (event) => {
	
		if (event.keyCode === 13) {
			handleSolution();
		}
	};

   // ? Handle every input change in the game.
	const handleChange = (e, row, column) => {
		// Create copy of the original grid.
		const wordGridCopy = [...gameGrid];
		wordGridCopy[row][column] = e.target.value;
		setGameGrid(wordGridCopy);
	}

   // ? With the actual row word, we control if the answer is correct.
   const handleSolution = (e, row, column) => {
      // Create copy of the original grid.
		const wordGridCopy = [...gameGrid];
		wordGridCopy[row][column] = e.target.value;
		setGameGrid(wordGridCopy);

		console.log('hola');
		
//       // Know witch letters from the word are in correct position, witch are in wrong and witch are not in the word.
//       for (let i in word){
//         if (!word[i].includes(solution[i])) {
//            // No tiene la letra.
//         } 
// 
// 		if (word[i].includes(solution[i])){
// 			if (word[i] != solution[i]) {
// 				// Posición errónea.
// 			} else{
// 				// Posición correcta
// 			}
// 		}
//       }
   }

	return <Div>
		<div>
			{ gameGrid.map((row, rowIndex) => 
				<RowWrapper key={rowIndex}> { row.map((col, colIndex) => 
					<LetterWrapper 
						value={gameGrid[rowIndex][colIndex].letter} 
						onChange={(e) => handleChange(e, rowIndex, colIndex)}
						onKeyPress={(e) => handleKeypress(e)}
						key={colIndex}
						maxLength="1" 
					/>
					)} 
				</RowWrapper>) 
			}

		</div>
	</Div>;
}

/* Styled Components */
const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 8px;
`

const RowWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
`

const LetterWrapper = styled.input`
width: 80px;
height: 80px;
background-color: #787C7E;
color: #fff;
font-size: 32px;
display: flex;
text-align: center;
margin: 8px;
`
