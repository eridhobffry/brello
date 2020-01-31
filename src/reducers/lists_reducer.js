const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "We created a static list and a static card"
      },
      {
        id: 1,
        text: "We used mix the materia UI style and styled components"
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "We will create our list but still static"
      },
      {
        id: 1,
        text: "And render many cards"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
