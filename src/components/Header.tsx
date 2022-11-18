import "../styles/header.scss"
import { NewSerieForm } from "./NewSerieForm";
import { useState } from 'react'

export function Header(){

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <header>
        <a href="#">
        <h2>Best Series</h2>
        </a>
        <button onClick={() => setOpenModal(true)} className="createNew">Create new</button>
      </header>
      {openModal && <NewSerieForm closeModal={setOpenModal}/>}
    </>
  )
}