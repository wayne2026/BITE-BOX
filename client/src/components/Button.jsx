
export default function Button({label,css,setlogin}) {
  return (
    <div className={`${css} border-2 text-center flex items-center justify-center`}>
      <button onClick={()=>setlogin(true)}>{label}</button>
    </div>
  )
}
