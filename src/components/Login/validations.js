import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().max(16).required()
});

export default schema;
