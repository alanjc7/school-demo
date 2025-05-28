import { useState } from 'react';

function NameColorTable() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#b517af');
  const [rows, setRows] = useState([{ name: 'Alan', color: 'rgb(20,173,0)' }]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    setRows([...rows, { name, color }]);
    setName('');
    setColor('#ffffff');
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1em',
        borderRadius: '8px',
        maxWidth: 400,
        margin: '1em auto',
      }}
    >
      <h2>Onze lievelings kleuren</h2>
      <p>Voeg je eigen naam en kleur toe!</p>
      <form
        onSubmit={handleAdd}
        style={{
          display: 'flex',
          gap: '0.5em',
          marginBottom: '1em',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Naam"
          style={{ flex: 2 }}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            flex: 1,
            height: '2.5em',
            border: 'none',
            background: 'none',
          }}
        />
        <button type="submit" style={{ flex: 1 }}>
          Toevoegen
        </button>
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5em' }}>Naam</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5em' }}>
              Kleur
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
                {row.name}
              </td>
              <td
                style={{
                  border: '1px solid #ccc',
                  padding: '0.5em',
                  background: row.color,
                }}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NameColorTable;
