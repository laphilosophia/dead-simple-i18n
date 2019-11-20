export default class i18n {
  constructor (options) {
    this.locales = Object.create({})

    if (this.checkIsObject(options)) {
      this.settings = Object.assign({
        namespace: 'sikko-i18n'
      }, options)
    }
  }

  checkIsObject (obj) {
    return (obj instanceof Object)
  }

  checkIsEqual (a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  parse (obj) {
    return JSON.parse(obj)
  }

  find (path, def) {
    const stringToPath = path => {
      if (typeof path !== 'string') return path

      let output = []

      path.split('.').forEach(item => {
        item.split(/\[([^}]+)\]/g).forEach(key => {
          if (key.length > 0) output.push(key)
        })
      })

      return output
    }

    path = stringToPath(path)

    let current = this.locales

    for (let i = 0; i < path.length; i++) {
      if (!current[path[i]]) return def

      current = current[path[i]]
    }

    return current  
  }

  stringify (obj) {
    return JSON.stringify(obj)
  }

  getLocale (key) {
    const { namespace } = this.settings

    const stored =  localStorage.getItem(namespace)

    if (this.checkIsEqual(this.locales, JSON.parse(stored))) {
      return JSON.parse(stored)[key]
    }
  }

  getLocales () {
    const { namespace } = this.settings

    if (store) {
      return localStorage.getItem(this.parse(namespace))
    } else {
      return this.locales
    }
  }

  setLocales (value) {
    const { namespace } = this.settings

    if (this.checkIsObject(this.locales)) {
      this.locales = value

      localStorage.setItem(
        namespace,
        this.stringify(this.locales)
      )
    }
  }
}
