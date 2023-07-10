import wineData from '../../data/wineData.json';
import React from 'react';
import helperFunc from '../../helperFunc';

function GammaStats() {
    helperFunc.addGammatoData(wineData);
    const classes = Array.from(new Set(wineData.map(item => item['Alcohol'])));
    console.log({wineData});
  return (
    <>
    <h2>Gamma Stats</h2>
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
          <td>Gamma Mean</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.formatNumber(helperFunc.calculateMean(wineData.filter(item => item['Alcohol'] === className), 'Gamma'))}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.formatNumber(helperFunc.calculateMedian(wineData.filter(item => item['Alcohol'] === className), 'Gamma'))}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {classes.map((className, index) => (
            <td key={index}>{helperFunc.formatNumber(helperFunc.calculateMode(wineData.filter(item => item['Alcohol'] === className), 'Gamma'))}</td>
          ))}
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default GammaStats