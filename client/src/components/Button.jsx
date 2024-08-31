import {useNavigate } from "react-router-dom";

export default function Button({label,css}) {
  const navigate= useNavigate()
  return (
    <div className={`${css} border-2 text-center flex items-center justify-center`}>
      <button onClick={()=>navigate('/login')}>{label}</button>

    </div>
  )
}
