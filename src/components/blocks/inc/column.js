import React from 'react'

const Column = ({ columnData }) => (
  <aside>
    <h3 className="subtitle is-4">{columnData.title}</h3>
    <img srcSet={columnData.image.childImageSharp.fluid.srcSet} />
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: columnData.content }}
    />
  </aside>
)

export default Column
