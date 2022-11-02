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

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
