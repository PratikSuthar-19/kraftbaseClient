import React from 'react'
import './TagComponent.css'

type TagProps = {
  backgroundColor: string;
  color: string;
  text: string;
};


const TagComponent : React.FC<TagProps> = ({backgroundColor , color , text}) => {

    const tagStyles: Record<string, { backgroundColor: string; color: string }> = {
          Critical: { backgroundColor: "red", color: "white" },
          Medium: { backgroundColor: "orange", color: "white" },
          Low: { backgroundColor: "yellow", color: "white" },
          Hypejab: { backgroundColor: "plum", color: "purple" },
          Getastra:{ backgroundColor: "skyblue", color: "blue" },

  };

  const style = tagStyles[text] || { backgroundColor: "rgb(236, 208, 152)", color: "rgb(243, 168, 28)" }; 
  return (
    <div className="tag" style={style}>
           {text}
    </div>
  )
}

export default TagComponent
