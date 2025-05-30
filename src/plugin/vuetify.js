import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
})

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Menggunakan Material Design Icons
  },
});
