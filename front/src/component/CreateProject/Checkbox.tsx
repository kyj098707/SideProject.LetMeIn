import React, { ReactNode } from 'react'

interface props {
  children: ReactNode,
  disabled: boolean,
  checked: boolean,
  onChange: React.ChangeEvent<HTMLInputElement>,
}

const Checkbox:React.FC<props> = ({children,disabled,checked,onChange}) => {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        // onChange={({ target: {children} }) => onChange(checked)}
      />
      {children}
    </label>
  )
}

export default Checkbox