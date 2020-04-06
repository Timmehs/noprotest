import React from 'react'

const Column = ({ columnData }) => (
  <aside>
    <center>
      <img className="column-avatar" srcSet={columnData.image.childImageSharp.fluid.srcSet} />

    </center>
    <h3 className="subtitle is-4">{columnData.title}</h3>
    <div
      className="content is-5"
      dangerouslySetInnerHTML={{ __html: columnData.content }}
    />
  </aside>
)

export default Column
