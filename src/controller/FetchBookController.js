var axios = require('axios');
export function FetchBookController (req, res) {
    let id =req.params.id;
    axios.get('https://api.douban.com/v2/book/'+id).then(function (response) {
        console.log(response);
        res.render('book', { data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
}