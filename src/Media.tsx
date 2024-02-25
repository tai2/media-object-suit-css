import './Media.css';

export function Media({
  imageUrl,
  title,
  content,
  date,
  onDeleteClick,
}: {
  imageUrl: string;
  title: string;
  content: string;
  date: Date;
  onDeleteClick: () => void;
}) {
  return (
    <div className="Media">
      <div className="Media-leftSide">
        <img className="Media-image" src={imageUrl} />
      </div>
      <div className="Media-rightSide">
        <div className="Media-row">
          <span className="Media-title">{title}</span>
          <span className="Media-content">{content}</span>
        </div>
        <div className="Media-row">
          <span className="Media-date">{date.toDateString()}</span>
          <span className="Media-separator">-</span>
          <button className="Media-button" type="button" onClick={onDeleteClick}>Delete
          </button>
        </div>
      </div>
    </div>
  );
}
