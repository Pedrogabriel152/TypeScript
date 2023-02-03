import React, { ReactNode } from 'react';

export interface Props {
    title: string
    content: string
    comentsQty: number
    tags: string[]

    // 8 Enum
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

export  function Destructuring ({title, content, comentsQty, tags, category}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantitade de comentários: {comentsQty}</p>
      <div>
        {tags.map((tag): any => (
           <span>#{tag} </span> 
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}
