import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().max(16).required()
});

export default schema;
