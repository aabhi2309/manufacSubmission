import wineData from '../../data/wineData.json';
import React from 'react';
import helperFunc from '../../helperFunc';

function FlavanoidsStats() {
    const classes = Array.from(new Set(wineData.map(item => item['Alcohol'])));
  return (
    <>
    <h2>Flavanoids Stats</h2>
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {classes.map((className, index) => (
            <th key={index}>Class {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flavanoids Mean</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.formatNumber(helperFunc.calculateMean(wineData.filter(item => item['Alcohol'] === className), 'Flavanoids'))}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.formatNumber(helperFunc.calculateMedian(wineData.filter(item => item['Alcohol'] === className), 'Flavanoids'))}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.calculateMode(wineData.filter(item => item['Alcohol'] === className), 'Flavanoids')}</td>
          ))}
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default FlavanoidsStats