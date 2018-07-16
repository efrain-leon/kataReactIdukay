import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  labyrinth() {
    return [['Inicio', 0, 1], [1, 0, 1], [1, 0, 'Salida']];
  }
  
  labyrinth2() {
    return [['Inicio', 0, 0, 1, 'Salida'], [1, 0, 1, 1, 0], [1, 0, 0, 1, 0], [0, 0, 1, 0, 0], [1, 0, 0, 0, 0]];
  }
  
  getCoordinatesStartAndEnd(labyrinth) {
    let start = {};
    let end = {};
    
    for (let i = 0; i < labyrinth.length; i += 1) {
      for (let j = 0; j < labyrinth.length; j += 1) {
        if (labyrinth[i][j] === 'Inicio') {
          start = {x: i, y: j};
        }
        
        if (labyrinth[i][j] === 'Salida') {
          end = {x: i, y: j};
        }
      }
    }
    
    return {start: start, end: end};
  }
  
  getHomologateLabyrinth(labyrinth) {
    for (let i = 0; i < labyrinth.length; i += 1) {
      for (let j = 0; j < labyrinth.length; j += 1) {
        if (labyrinth[i][j] === 'Inicio') {
          labyrinth[i][j] = 0;
        }
        
        if (labyrinth[i][j] === 'Salida') {
          labyrinth[i][j] = 0;
        }
      }
    }
    
    return labyrinth;
  }
  
  findPath(labyrinth, coordinates) {
    let posx = coordinates.start.x;
    let posy = coordinates.start.y;
    let stack = [];
    let pathFound = false;
    
    while (!pathFound) {
      stack.push({x: posx, y: posy});
      
      if (posx === coordinates.end.x && posy === coordinates.end.y) {
        break;
      } else {
        labyrinth[posx][posy] = 1;
        
        if (labyrinth[posx + 1] && labyrinth[posx + 1][posy] === 0) {
          posx += 1;
          continue;
        }
          
        if (labyrinth[posx][posy + 1] === 0) {
          posy += 1;
          continue;
        }
          
        if (labyrinth[posx - 1] && labyrinth[posx - 1][posy] === 0) {
          posx -= 1;
          continue;
        }
        
        if (labyrinth[posx][posy - 1] === 0) {
          posy -= 1;
          continue;
        }
        
        stack.pop();
          
        if (stack.length > 0) {
          posx = stack.pop()[0];
          posy = stack.pop()[1];
        } else {
          break;
        }
      }
    }
    
    return stack;
  }
  
  printPath(labyrinth, stack) {
    stack.map(element => {
      labyrinth[element.x][element.y] = 'x';
    });
    
    return labyrinth;
  }
  
  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
