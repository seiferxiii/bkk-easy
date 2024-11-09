export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getSubmittedNames' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
