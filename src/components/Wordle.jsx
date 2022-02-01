import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Wordle(){
   const [gameGrid, setGameGrid] = useState([]);
   const [focusRow, setFocusRow] = useState(0);
   const [isGameOver, setIsGameOver] = useState(false);
   const solution = "HOLAS";

   useEffect(() => {
       
      // ? We create the grid to play the game
      function initializeGrid(){
         let wordGrid = [];

         for (let i = 0; i < 6; i++){
            wordGrid.push([]);
			for (let j = 0; j < 5; j++){
				wordGrid[i].push({letter: "", status: "Empty"})
			}
         }
         setGameGrid(wordGrid);
      }

      if (gameGrid.length === 0) initializeGrid();
   });

   // ? Handle every input change in the game.
	const handleChange = (e, row, column) => {
		// Create copy of the original grid.
		const wordGridCopy = [...gameGrid];
		wordGridCopy[row][column].letter = e.target.value;
		setGameGrid(wordGridCopy);
	}

   // ? With the actual row word, we control if the answer is correct.
   const handleSolution = (e, row, column) => {
      // Create copy of the original grid.
		const wordGridCopy = [...gameGrid];
		setGameGrid(wordGridCopy);
		const currentWord = wordGridCopy[focusRow]
		
      // Know witch letters from the word are in correct position, witch are in wrong and witch are not in the word.
      for (let i = 0; i < currentWord.length; i++){
        if (currentWord[i].letter === solution[i]) currentWord[i].status = "Correct";
		if (solution.includes(currentWord[i].letter) && currentWord[i].letter !== solution[i]) currentWord[i].status = "WrongPosition";
		if (!solution.includes(currentWord[i].letter)) currentWord[i].status = "Incorrect";
      }

	  setFocusRow(focusRow + 1);
	  let isCorrect = true;
	  for(let i in currentWord.length){
		  if (currentWord[i].status != "Correct") {
			  isCorrect = false;
		  }
	  }
   }

	return <Div>
		<div>
			{ gameGrid.map((row, rowIndex) => 
				<RowWrapper key={rowIndex}> { row.map((col, colIndex) => 
					<LetterWrapper 
						value={gameGrid[rowIndex][colIndex].letter}
						status={col.status} 
						onChange={(e) => handleChange(e, rowIndex, colIndex)}
						key={colIndex}
						maxLength="1" />
					)} 
				</RowWrapper>) 
			}
		</div>

		<button onClick={handleSolution} > Enviar </button>
	</Div>;
}

/* Styled Components */
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2px;
`

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2px;
`

const LetterWrapper = styled.input`
	width: 60px;
	height: 60px;	
	background-color: ${(props) => {
		if (props.status === "Correct") return "#6BAA64";
		if (props.status === "WrongPosition") return "#CAB458";
		if (props.status === "Incorrect") return "#787C7E";
		if (props.status === "empty") return "#FFF";
	}};
	border: 2.5px solid ${(props) => {
		if (props.status === "Correct") return "#6BAA64";
		if (props.status === "WrongPosition") return "#CAB458";
		if (props.status === "Incorrect") return "#787C7E";
		if (props.status === "Empty") return "#D4D4D3";

	}};
	color: ${(props) => {
		if (props.status != "Empty") return "#fff";
		else return "#000";
	}};
	font-size: 32px;
	display: flex;
	text-align: center;
	margin: 2px;
	font-weight: bold;
	text-transform: uppercase;
`
