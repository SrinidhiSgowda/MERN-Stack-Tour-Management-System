// import {
//   Children,
//   createContent,
//   createContext,
//   useEffect,
//   useReducer,
// } from "react";

// const initial_state = {
//   user:
//     localStorage.getItem("user") !== undefined
//       ? JSON.parse(localStorage.getItem("user"))
//       : null,
//   loading: false,
//   error: null,
// };
// export const AuthContent = createContext(initial_state);

// const AuthReducer = (state, action) => {
//   switch ((action, type)) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         loading: false,
//         error: action.payload,
//       };
//     case "REGISTER_SUCCESS":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ Children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, initial_state);
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//   }, [state.user]);
//   return (
//     <AuthContextProvider
//       value={{
//         user: state.user,
//         loading: state.loading,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {Children}
//     </AuthContextProvider>
//   );
// };


import {
    createContext,
    useEffect,
    useReducer,
  } from "react";
  
  const initial_state = {
    user:
      localStorage.getItem("user") !== undefined
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    loading: false,
    error: null,
  };
  export const AuthContext = createContext(initial_state);
  
  const AuthReducer = (state, action) => {
    switch (action.type) { // Fixed the syntax here
      case "LOGIN_START":
        return {
          user: null,
          loading: true, // This should be true when login starts
          error: null,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          loading: false,
          error: null,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          loading: false,
          error: action.payload,
        };
      case "REGISTER_SUCCESS":
        return {
          user: null,
          loading: false,
          error: null,
        };
      case "LOGOUT":
        return {
          user: null,
          loading: false,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const AuthContextProvider = ({ children }) => { // Fixed the usage of children
    const [state, dispatch] = useReducer(AuthReducer, initial_state);
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
  
    return (
      <AuthContext.Provider // Fixed the usage of AuthContent.Provider
        value={{
          user: state.user,
          loading: state.loading,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  





