import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
