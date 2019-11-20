import i18n from './i18n'

const languages = new i18n({
  defaults: ['en', 'tr'],
  namespace: 'blabla'
})

languages.setLocales({
  en: {
    hello: 'Hello, World!',
    page: {
      title: 'Page Title',
      content: 'Long page content, you will never read'
    }
  },
  tr: {
    hello: 'Merhaba, Dünya!',
    page: {
      title: 'Sayfa Başlığı',
      content: 'Hiç bir zaman okumayacağın sayfa içeriği'
    }
  }
})

const tr = languages.getLocale('tr')
const en = languages.getLocale('en')

console.log(tr, en)

console.log(en.hello)

console.log(en.page.title)

console.log(languages.find('en.page.title'))
