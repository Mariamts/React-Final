import { withAuthProtected } from '../../hoc';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default withAuthProtected(HomePage);
