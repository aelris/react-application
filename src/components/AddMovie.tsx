import { Route } from "react-router";


export const AddMovie = () => (
    <Route render={({ history }) => (
        <button type="button" onClick={() => {history.push('/add-movie')}}>
           + Add Movie
        </button>
    )} />
)
