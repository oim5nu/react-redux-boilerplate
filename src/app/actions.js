/**
 *  App Actions
 */

export const appActions = {
  DO_STUFF: 'app/DO_STUFF',
  doStuff: (stuff) => ({
    type: appActions.DO_STUFF,
    payload: {stuff}
  }),
}
