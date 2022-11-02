import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues = {}) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // setValues({});
    callback(values);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // if (parseInt(value)) {
    //   value = parseInt(value);
    // }
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleToggle = (event) => {
    console.log(event.target.name);
    console.log(event.target.checked);
    const { name, checked } = event.target;
    setValues((values) => ({ ...values, [name]: checked }));
  };

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return {
    handleChange,
    handleToggle,
    handleSubmit,
    values,
  };
};

export default useForm;
