import React, { useState, useRef } from 'react';

function ExpandCollapse({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const titleBarRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
    const titleBar = titleBarRef.current;
    const content = contentRef.current;
    const container = containerRef.current;

    if (container && titleBar && content) {
      if (!expanded) {
        container.appendChild(content);
        container.appendChild(titleBar);
      } else {
        container.insertBefore(titleBar, content);
      }
    }
  };

  return (
    <div className="expandable-section" ref={containerRef}>
      <div className="expandable-title-bar" onClick={toggleExpand} ref={titleBarRef}>
        <span className="expandable-title">{expanded ? 'Se mindre' : 'Se mer'}</span>
        <ion-icon
          className="expan-icon"
          name={expanded ? 'chevron-up-outline' : 'chevron-back-outline'}
        ></ion-icon>
      </div>
      <div className="expandable-content-wrapper" style={{ display: expanded ? 'grid' : 'none' }} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default ExpandCollapse;