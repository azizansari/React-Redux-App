const initState = {
  projects: [
    {
      id: 1,
      title: "Supreme verdict on unions",
      contents:
        "this is going to be a massive challenges to be faced by the govt.",
    },
    {
      id: 2,
      title: "any one can do that",
      contents:
        "this is going to be a massive challenges to be faced by the govt.",
    },
    {
      id: 3,
      title: "we are not alone",
      contents:
        "this is going to be a massive challenges to be faced by the govt.",
    },
    {
      id: 4,
      title: "React Js crash course",
      contents:
        "this is going to be a massive challenges to be faced by the govt.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project succes");
      return state;
    case "CREATE_PROJECT_ERR":
        console.log('create project err');
        return state;
    default:
      return state;
  }
};

export default projectReducer;
