const Form = ({ handlerSubmit = null, children, className = "" }) => {
  return (
    <form className={`form ${className}`} onSubmit={handlerSubmit}>
      {children}
    </form>
  );
};

export default Form;