import { X } from 'phosphor-react'
import "../styles/modalForm.scss"

export function NewSerieForm(){
  return(
    <div className="modal-background">
      <div className="modal-form">
        <h2>Create new favorite Serie <span><X size={32} /></span> </h2>
        <form>
          <label htmlFor="name">Serie Name</label>
          <input id="name" type="text" placeholder="Serie Name" />
          <label htmlFor="genre">Genre</label>
          <input id="genre" type="text" placeholder="Serie Genre" />
          <label htmlFor="season">Season</label>
          <input id="season" type="text" placeholder="Season" />
        </form>
    </div>
    </div>
  )
}