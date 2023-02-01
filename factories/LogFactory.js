export default class LogFactory {
  logColor (name) {
    return () => {
      // eslint-disable-next-line no-console
      console.log(`%c ${name} Button Clicked `, `background: ${name.toLowerCase()}`)
    }
  }
}
