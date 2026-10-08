import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const ProjectItems = ({ item }) => {
  const linkLabel = item.link.includes('github.com') ? 'GitHub' : 'Website';
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const imageButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isPreviewOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false);
        imageButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPreviewOpen]);

  const closePreview = () => {
    setIsPreviewOpen(false);
    imageButtonRef.current?.focus();
  };

  return (
    <article className="project__card">
      <button
        ref={imageButtonRef}
        type="button"
        className="project__image-button"
        onClick={() => setIsPreviewOpen(true)}
        aria-label={`View full-size image for ${item.title}`}
      >
        <img className="project__img" src={item.image} alt={item.title} />
      </button>
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">({item.description})</p>
      <p className="project__technologies">
        <span>Tech: </span>{item.technologies.join(' · ')}
      </p>
      <a className="project__link" href={item.link} target="_blank" rel="noreferrer">
        [{linkLabel}]
      </a>
      {isPreviewOpen && createPortal(
        <div className="project__lightbox" onClick={closePreview}>
          <div
            className="project__lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${item.title} full-size image`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="project__lightbox-close"
              onClick={closePreview}
              aria-label="Close image preview"
            >
              &times;
            </button>
            <img className="project__lightbox-image" src={item.image} alt={item.title} />
            <p className="project__lightbox-caption">{item.title}</p>
          </div>
        </div>,
        document.body
      )}
    </article>
  );
};

export default ProjectItems;
