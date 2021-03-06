import Image from 'next/image'
import React from 'react'


function Title() {
  return (
    <div className="fullflex">
        <Image className="rounded-3xl" width={300} height={300} src="/images/froggy.png" alt="froggy"/>

        <span className="mt-4 bg-slate-700 p-2 rounded-lg text-center">
          <h1 className="mt-2 mario">
            <span className="rainbow-letters">
              <span className="sm:text-6xl text-4xl">P</span>
              <span className="sm:text-6xl text-4xl">a</span>
              <span className="sm:text-6xl text-4xl">t</span>
              <span className="sm:text-6xl text-4xl">a</span>
              <span className="sm:text-6xl text-4xl">t</span>
              <span className="sm:text-6xl text-4xl">o</span>
            </span>

            <span className="mario text-2xl text-yellow-400">(Pat)</span>
          </h1>
          <h1 className="mario text-xl sm:text-2xl text-green-600">I code and stuff.</h1>
        </span>

      </div>
  )
}

export default Title