
import { Results } from "../../models/card"

function Result({wrong,correct,total}:Results){

  return (
    <>
    <div>Results</div>
    <p>you got {correct} correct and {wrong} wrong from a total of {total} questions</p>
    <h4>{correct>wrong?'congrats!':'try again'}</h4>
    </>
    
  )
}

export default Result