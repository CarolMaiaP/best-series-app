import "../styles/header.scss"

export function Header(){
  return (
    <header>
      <a href="#">
       <h2>Best Series</h2>
      </a>
      <button className="createNew">Create new</button>
    </header>
  )
}