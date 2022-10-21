const { createApp } = Vue
const link = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=ETH,XRP,TON,SOL,APT'

createApp({
  data() {
    return {
      _results: [],
      get results() {
        return this._results
      },
      set results(value) {
        this._results = value
      },
    }
  },
  mounted() {
    axios
      .get(
        link,
      )
      .then((response) => {
        this.results = response.data
        //Если данные успешно возвращены, выполнится код
        //блока then, данные сохранятся в переменной
      })
      .catch(function (error) {
        console.log('Show error notification!')
        return Promise.reject(error)
      })
  },
}).mount('#task')