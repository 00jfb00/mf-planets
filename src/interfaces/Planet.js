import { type, validate } from "../helpers/InterfaceValidators";

class Planet {
  constructor(properties = {}) {
    this.id = validate(type("number"), properties.id);
    this.name = validate(type("string"), properties.name);
  }
}
export default Planet;
