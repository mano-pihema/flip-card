import { Results } from '../../models/card'

function Result({ wrong, correct }: Results) {
  return (
    <>
      <div>Results</div>
      <p>
        you got {correct} correct and {wrong} wrong
      </p>
      <h4>{correct > wrong ? 'congrats!' : 'try again'}</h4>
    </>
  )
}

export default Result
