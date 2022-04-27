import React from "react";

type Props = {
  name?: string;
};

const Button = ({ name }: Props) => {
  return (
    <div>
      <h1 className="text-red-600">Hello</h1>
    </div>
  );
};

export default Button;
