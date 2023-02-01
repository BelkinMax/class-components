export default class LogFactory {
  static logColor (name, color) {
    return () => {
      // eslint-disable-next-line no-console
      console.log(`%c ${name} Button Clicked `, `background: ${color}`)
    }
  }
}
