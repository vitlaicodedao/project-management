import { forwardRef } from "react";
import { paragraph1, label, input1 } from "../tailwind-config";

const Input = forwardRef(({ textarea, ...props }, ref) => {
  return (
    <p className={paragraph1}>
      <label className={label}>{label}</label>
      {textarea ? (
        <textarea required ref={ref} {...props} className={input1} />
      ) : (
        <input required ref={ref} {...props} className={input1} />
      )}
    </p>
  );
});
export default Input;
