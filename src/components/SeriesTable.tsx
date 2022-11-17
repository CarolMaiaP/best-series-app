import { Pencil, Trash } from "phosphor-react"
import "../styles/table.scss"

export function SeriesTable(){
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
                <Pencil id="pencil" size={25} /><Trash id="trash" size={25} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}