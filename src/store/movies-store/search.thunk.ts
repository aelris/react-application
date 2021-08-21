export const SEARCH = 'SEARCH';

export function search(value: any) {
  return {type: SEARCH, value};
}

const initialState = {contents: ['Mirististica', 'Vet'], value: '', works: []};

export default function reducer(state = initialState, action: { type?: any; value?: any; }) {
  switch(action.type) {
    case SEARCH: {
      const {value} = action;
      const works = state.contents.filter((val) => val.includes(value));
      return {...state, value, works};
    }
    default:
      return state;
  }
}