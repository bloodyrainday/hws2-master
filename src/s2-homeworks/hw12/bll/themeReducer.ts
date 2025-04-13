type initStateType = {
  themeId: number;
};

const initState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: changeThemeIdActionType
): initStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };

    default:
      return state;
  }
};

export const changeThemeId = (
  id: number
): { type: "SET_THEME_ID"; id: number } => ({ type: "SET_THEME_ID", id }); // fix any

type changeThemeIdActionType = ReturnType<typeof changeThemeId>;
