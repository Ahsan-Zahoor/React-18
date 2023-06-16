import { useState, useTransition } from "react";

const Trasnsition = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [list, setlist] = useState([]);

  const LIST_SIZE = 2000;

  function handleChange(e) {
    setName(e.target.value);
    const l = [];
    startTransition(() => {
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setlist(l);
    });
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending
        ? "Loading"
        : list.map((item, index) => <div key={index}>item</div>)}
    </>
  );
};

export default Trasnsition;
