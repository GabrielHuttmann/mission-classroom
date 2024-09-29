import '../globals.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><i className="fas fa-home"></i></li>
          <li><i className="fas fa-calendar-alt"></i></li>
          <li><i className="fas fa-envelope"></i></li>
          <li><i className="fas fa-cog"></i></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
