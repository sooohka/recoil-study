import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  onSubmit: ({ name }: { name: string }) => void;
};

function AddForm(props: Props) {
  const { onSubmit } = props;
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name: input });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddForm;
