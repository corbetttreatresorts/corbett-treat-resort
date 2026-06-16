import "./Button.css";


const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames} aria-disabled={disabled} {...props}>
        <span>{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
