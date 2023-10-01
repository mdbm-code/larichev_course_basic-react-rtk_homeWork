import './Badge.css';

const Badge = ({ value }) => {
  return (
    <div className="badge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="#7B6EF6" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#FFF"
          strokeWidth="1px"
          dy=".3em"
        >
          {value}
        </text>
      </svg>
    </div>
  );
};

export default Badge;
