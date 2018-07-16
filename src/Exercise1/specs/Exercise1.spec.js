import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });
  
  describe('when matrix is 3x3', () => {
    let labyrinth;
    
    beforeEach(() => {
      labyrinth = instance.labyrinth();
    });
    
    it('should create the labyrinth', () => {
      expect(labyrinth[0]).toEqual(['Inicio', 0, 1]);
      expect(labyrinth[1]).toEqual([1, 0, 1]);
      expect(labyrinth[2]).toEqual([1, 0, 'Salida']);
    });
    
    it('should return coordinates of start and end', () => {
      const result = instance.getCoordinatesStartAndEnd(labyrinth);
      
      expect(result.start).toEqual({x: 0, y: 0});
      expect(result.end).toEqual({x: 2, y: 2});
    });
    
    it('should return homologate labyrinth with 0 and 1', () => {
      const result = instance.getHomologateLabyrinth(labyrinth);
      
      expect(result[0]).toEqual([0, 0, 1]);
      expect(result[1]).toEqual([1, 0, 1]);
      expect(result[2]).toEqual([1, 0, 0]);
    });
    
    it('should found path', () => {
      const coordinates = instance.getCoordinatesStartAndEnd(labyrinth);
      let result = instance.getHomologateLabyrinth(labyrinth);
      result = instance.findPath(result, coordinates);
      
      expect(result).toEqual([{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}]);
    });
    
    it('should print path', () => {
      const coordinates = instance.getCoordinatesStartAndEnd(labyrinth);
      labyrinth = instance.getHomologateLabyrinth(labyrinth);
      const path = instance.findPath(labyrinth, coordinates);
      const result = instance.printPath(labyrinth, path);
      
      expect(result[0]).toEqual(['x', 'x', 1]);
      expect(result[1]).toEqual([1, 'x', 1]);
      expect(result[2]).toEqual([1, 'x', 'x']);
    });
  });
  
  describe('when matrix is 5x5', () => {
    let labyrinth;
    
    beforeEach(() => {
      labyrinth = instance.labyrinth2();
    });
    
    it('should create the labyrinth', () => {
      expect(labyrinth[0]).toEqual(['Inicio', 0, 0, 1, 'Salida']);
      expect(labyrinth[1]).toEqual([1, 0, 1, 1, 0]);
      expect(labyrinth[2]).toEqual([1, 0, 0, 1, 0]);
      expect(labyrinth[3]).toEqual([0, 0, 1, 0, 0]);
      expect(labyrinth[4]).toEqual([1, 0, 0, 0, 0]);
    });
    
    it('should return coordinates of start and end', () => {
      const result = instance.getCoordinatesStartAndEnd(labyrinth);
      
      expect(result.start).toEqual({x: 0, y: 0});
      expect(result.end).toEqual({x: 0, y: 4});
    });
    
    it('should return homologate labyrinth with 0 and 1', () => {
      labyrinth = instance.getHomologateLabyrinth(labyrinth);
      
      expect(labyrinth[0]).toEqual([0, 0, 0, 1, 0]);
      expect(labyrinth[1]).toEqual([1, 0, 1, 1, 0]);
      expect(labyrinth[2]).toEqual([1, 0, 0, 1, 0]);
      expect(labyrinth[3]).toEqual([0, 0, 1, 0, 0]);
      expect(labyrinth[4]).toEqual([1, 0, 0, 0, 0]);
    });
    
    it('should found path', () => {
      const coordinates = instance.getCoordinatesStartAndEnd(labyrinth);
      let result = instance.getHomologateLabyrinth(labyrinth);
      result = instance.findPath(result, coordinates);
      
      expect(result).toEqual([
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 1},
        {x: 2, y: 1},
        {x: 3, y: 1},
        {x: 4, y: 1},
        {x: 4, y: 2},
        {x: 4, y: 3},
        {x: 4, y: 4},
        {x: 3, y: 4},
        {x: 2, y: 4},
        {x: 1, y: 4},
        {x: 0, y: 4}]);
    });
    
    it('should print path', () => {
      const coordinates = instance.getCoordinatesStartAndEnd(labyrinth);
      labyrinth = instance.getHomologateLabyrinth(labyrinth);
      const path = instance.findPath(labyrinth, coordinates);
      const result = instance.printPath(labyrinth, path);
      
      expect(result[0]).toEqual(['x', 'x', 0, 1, 'x']);
      expect(result[1]).toEqual([1, 'x', 1, 1, 'x']);
      expect(result[2]).toEqual([1, 'x', 0, 1, 'x']);
      expect(result[3]).toEqual([0, 'x', 1, 0, 'x']);
      expect(result[4]).toEqual([1, 'x', 'x', 'x', 'x']);
    });
  });
});
