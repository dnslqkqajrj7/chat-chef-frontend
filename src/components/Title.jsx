import React from 'react'

const Title = ({mainTitle, subTitle}) => {
//logic


//view
  return (
    <div>
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white">{mainTitle}</h1>
         {subTitle && <span className="block text-sm mt-3 text-white break-keep pr-9">
            {subTitle}
          </span>}
        </div>
            </div>

  )
}

export default Title