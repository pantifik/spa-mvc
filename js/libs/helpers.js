export function setLocation(state, curLoc){
  history.pushState(state, null, curLoc);
  console.log(history.state)
}