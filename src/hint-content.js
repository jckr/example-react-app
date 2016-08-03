import React from 'react';
export default function HintContent({value}) {
  const {birth, country, death} = value;
  return <div>
    <div style={{
      borderBottom: '1px solid #717171',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingBottom: 5,
      textTransform: 'uppercase'
    }}>{country}</div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute'}}>Birth Rates</div>
      <div style={{position: 'absolute', right: 0}}>{birth}</div>
    </div>
    <div style={{position: 'relative', height: '15px', width: '100%'}}>
      <div style={{position: 'absolute'}}>Death Rates</div>
      <div style={{position: 'absolute', right: 0}}>{death}</div>
    </div>
  </div>;
}
