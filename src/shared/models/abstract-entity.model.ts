export abstract class AbstractModel<T> {
  constructor(attrs?: T) {
    Object.assign(this, attrs);
  }
}