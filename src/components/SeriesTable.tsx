import { File, Pencil, Trash } from "phosphor-react"
import "../styles/table.scss"
import { ViewSerieInfo } from "./ViewSerieInfo"
import { useState } from 'react';

export function SeriesTable(){
  const [ openFile, setOpenFile ] = useState(false)

  return(
    <main className="series-table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Serie</th>
            <th>Genre</th>
            <th>Season</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Breaking Bad</td>
            <td>Action, crime</td>
            <td>5 Seasons</td>
            <td>
              <div className="actions">
                <File onClick={() => setOpenFile(true)} id="file" size={25} />
                <Pencil id="pencil" size={25} />
                <Trash id="trash" size={25} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {openFile && <ViewSerieInfo openModalInfo={setOpenFile}/>}
    </main>
  )
}