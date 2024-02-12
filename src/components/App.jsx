import Feedback from './feedback/feedback.jsx'; // feedback.jsx

export const App = () => {
  return (
    <div className="container">
      <ul className="components-list">
        <li>
          <h1 className="components-header">goit-react-hw-02-feedback</h1>
        </li>
        <li className="components-item">
          <h2 className="components-subheader">Component "Feedback"</h2>
          <div className="components-item-box">
            <Feedback />
          </div>
        </li>
      </ul>
    </div>
  );
};
