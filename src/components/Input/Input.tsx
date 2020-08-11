import React, { FC, useState } from 'react';

export const Input: FC = () => {
  const [value, setValue] = useState();
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleOnChange = (event: any) => setValue(event.target.value);
  const handleToggle = () => setDisabled(!disabled);


  return <div>
    <input value={value} disabled={disabled} onChange={handleOnChange}/>
    <button onClick={handleToggle}>toggle</button>
  </div>
};
