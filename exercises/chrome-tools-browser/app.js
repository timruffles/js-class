
const List = Backbone.View.extend({
  render() {
    let html = "";
    this.collection.each((item) => {
      html += this._renderItem(item);
    })
    this.$el.html(html);
  }
  _renderItem(item) {
  }
});


function main() {

  const list = new List({

  });

}


function loadData() {
  
}
