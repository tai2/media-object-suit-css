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
      <img src={imageUrl} />
      <h1>{title}</h1>
      <div>{content}</div>
      <div>{date.toDateString()}</div>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
}
