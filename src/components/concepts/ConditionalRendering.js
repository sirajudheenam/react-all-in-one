export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

function RegularComponent() {
  return <h3>This is RegularComponent</h3>;
}

function SecretComponent() {
  return <h3>This is SecretComponent.</h3>;
}

function NightComponent() {
  return <h3>This is NightComponent</h3>;
}

function DayComponent() {
  return <h3>This is DayComponent.</h3>;
}
function DayOrNight({ day }) {
  return day ? <DayComponent /> : <NightComponent />;
}

// function ConditionalRendering(props) {
// Object Restructuring
function ConditionalRendering({ authorized, day }) {
  // if (props.authorized) {
  //   return <SecretComponent />;
  // } else {
  //   return <RegularComponent />;
  // }
  return (
    <div className="ConditionalRendering">
      <header className="demo-header">
        <div className="demo-header__badge">Conditional Rendering</div>
        <h1 className="demo-header__title">Conditional Rendering</h1>
        <p className="demo-header__desc">Shows multiple patterns for conditionally rendering JSX: &&, ternary, and early return.</p>
      </header>
      {authorized ? <SecretComponent /> : <RegularComponent />}
      {/* { props.authorized ? <SecretComponent /> : <RegularComponent /> } */}
      {/* { day ? <DayComponent /> : <NightComponent />} */}
      {/* { props.day ? <DayComponent /> : <NightComponent />} */}
      <DayOrNight day="true" />
    </div>
  );
}

export default ConditionalRendering;
