import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Wordle(){
    const [gameGrid, setGameGrid] = useState([]);   

    useEffect(() => {
		
		/** 
		 * ? We create the grid to play the game
		 */
        function initializeGrid(){
            let wordGrid = [];

            for (let i = 0; i < 6; i++){
            	wordGrid.push([]);

                for (let j = 0; j < 5; j++){
                    wordGrid[i].push({letter: "A", status: "empty"})
                }
            }

			setGameGrid(wordGrid);
        }

        if (gameGrid.length === 0) initializeGrid();
    });

	const handleChange = (e, row, column) => {
		// ? Create copy of the original grid.
		const wordGridCopy = [...gameGrid];
		wordGridCopy[row][column] = e.target.value;
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

	const LetterWrapper = styled.div`
		width: 80px;
		height: 80px;
		background-color: #787C7E;
		color: #fff;
		font-size: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 8px;
	`

	return <Div>
		<div>
			{ gameGrid.map((row, rowIndex) => 
				<RowWrapper key={rowIndex}> { row.map((col, colIndex) => 
					<LetterWrapper 
						value={gameGrid[rowIndex][colIndex].letter} 
						onChange={(e) => handleChange(e, rowIndex, colIndex)}
						key={colIndex}> 
						{col.letter} 
					</LetterWrapper>)} 
				</RowWrapper>) 
			}
		</div>
	</Div>;
}
