import * as Yup from "yup";

export const formInputsObj: any = {
  title: {
    label: "TITLE",
    name: "title",
    placeholder: "Movie title here",
    type: "text",
  },
  release_date: {
    label: "RELEASE DATE",
    name: "release_date",
    placeholder: "Select Date",
    type: "date",
  },
  movie_url: {
    label: "MOVIE URL",
    name: "poster_path",
    placeholder: "Movie URL here",
    type: "text",
  },
  genre: { label: "GENRE", fieldName: "genres" },
  overview: {
    label: "OVERVIEW",
    name: "overview",
    placeholder: "Overview here",
    type: "text",
  },
  runtime: {
    label: "RUNTIME",
    name: "runtime",
    placeholder: "Runtime here",
    type: "text",
  },
  budget: {
    label: "BUDGET",
    name: "budget",
    placeholder: "Budget here",
    type: "text",
  },
  revenue: {
    label: "REVENUE",
    name: "revenue",
    placeholder: "Revenue here",
    type: "text",
  },
  tagline: {
    label: "TAGLINE",
    name: "tagline",
    placeholder: "Tagline here",
    type: "text",
  },
  vote_average: {
    label: "VOTE AVERAGE",
    name: "vote_average",
    placeholder: "Vote average here",
    type: "text",
  },
  vote_count: {
    label: "VOTE COUNT",
    name: "vote_count",
    placeholder: "Vote count here",
    type: "text",
  },
};

export const movieValidationSchema = Yup.object({
  title: Yup.string().required("Title date is required").min(1).max(30),
  release_date: Yup.string().required("Release date is required"),
  poster_path: Yup.string().required("Poster url is required"),
  genres: Yup.array().of(Yup.string()).min(1).required(),
  overview: Yup.string().required("Overview is required"),
  runtime: Yup.number().required("Runtime is required"),
});
