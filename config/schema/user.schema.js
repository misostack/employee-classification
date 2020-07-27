const Joi = require("@hapi/joi");
const util = require("util");

const schema = Joi.object()
  .keys({
    email: Joi.string().trim().max(320).email().required(),
    password: Joi.string()
      .trim()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    repeatPassword: Joi.ref("password"),
  })
  .with("password", "repeatPassword");

const transformError = ({ message, path, type }) => {
  const field = path.join("_");
  return {
    field,
    type,
    errorMsgId: `error.${field}.${type}`,
  };
};

try {
  const data = schema.validate(
    {
      email: "  abc@asd  ",
      password: "123",
      repeatPassword: "123a ",
    },
    { abortEarly: false },
  ).error;
  console.dir(
    data.details.map((e) => transformError(e)),
    { depth: 5, color: true },
  );
} catch (err) {
  console.log(err);
}
