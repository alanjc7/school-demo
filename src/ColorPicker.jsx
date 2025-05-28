import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (e) => {
    setColor(e.target.value);
    document.body.style.background = e.target.value;
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px', maxWidth: 300, margin: '1em auto' }}>
      <h2>Kies een kleur</h2>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        style={{ width: '100%', height: '3em', border: 'none', background: 'none' }}
      />
    </div>
  );
}

export default ColorPicker; 
