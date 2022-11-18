import { X } from 'phosphor-react'
import "../styles/viewSerieInfo.scss"

export function ViewSerieInfo({openModalInfo}:any){
  return(
    <div className="modal-background">
      <div className="modal">
          <h2>Breaking Bad <span onClick={() => openModalInfo(false)} className="close"><X size={32} /></span></h2>
          <div className="description">
            <h4>Description</h4>
            <p>Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.</p>
          </div>
      </div>
    </div>
  )
}