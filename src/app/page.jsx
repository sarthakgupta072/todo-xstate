"use client"

import { useMachine } from "@xstate/react"
import { myMachine } from "./machines/myFirstMachine"

export default function Home() {
  const [state, send] = useMachine(myMachine)

  return (
    <div>
      {JSON.stringify(state.value)}
      <button onClick={() => send({ type: "MOUSEOVER" })}>MOUSEOVER</button>
      <button onClick={() => send({ type: "MOUSEOUT" })}>MOUSEOUT</button>
    </div>
  )
}
