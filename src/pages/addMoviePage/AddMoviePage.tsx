import React from "react";
import cross from "./../../images/x.svg"
import AddMovieInput from "./components/AddMovieInput";
import "./addMoviePage.css"
import {formInputsObj, movieValidationSchema} from "./formInputList";
import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {putMoviesThunk} from "../../store/movies-store/putMovies.thunk";


const initialValues = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: 0,
  budget: 0,
  revenue: 0,
  tagline: '',
  vote_average: 0,
  vote_count: 0
};



const AddMoviePage = ({active, setActive}: {active: boolean; setActive: (status: boolean) => void}) => {
  const dispatch = useDispatch();

  const submitForm = (values: any) => {
    const data = {
      ...values,
    }
    dispatch(putMoviesThunk(data));
  }

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
       <div className="addMoviePageContainer" onClick={e => e.stopPropagation()}>
        <img className="crossImg" src={cross} onClick={() => setActive(false)}/>
        <Formik  initialValues={initialValues} onSubmit={submitForm}  validationSchema={movieValidationSchema}>
          {
            () => (
              <Form onChange={event => console.log('event: ', event)}>
                {Object.keys(formInputsObj).map((key) => {
                  return (
                    <React.Fragment key={key}>
                      <Field>
                        {
                          ({field}: any) => (
                            <AddMovieInput
                              label={formInputsObj[key].label}
                              name={formInputsObj[key].name}
                              type={formInputsObj[key].type}
                              placeholder={formInputsObj[key].placeholder}
                              field
                            />
                          )
                        }
                      </Field>
                    </React.Fragment>
                  )
                })
                }
              </Form>
            )
          }
        </Formik>
        <div className="modal-window-action">
          <button type="reset" title="RESET">RESET</button>
          <button type="submit" title="SAVE">SAVE</button>
        </div>
       </div>
      </div>
  )
}

export default AddMoviePage;