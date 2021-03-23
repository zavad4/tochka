class UI {
  constructor (items) {
      this.items = items;
  }
  sortByPrice(direction) {
      let res = [...this.items];
      res.sort((a, b) => (a.price - b.price));
      if (direction) return res;
      return res.reverse(); 
  }
  search(param) {
      res = this.items.filter(x => x.name == param);
      if(res) return res;
      return false;
  }
  filterbyPrice(startValue, endValue) {
      if(startValue <= endValue){
      res = this.items.filter(x => (x.price >= startValue && x.price <= endValue));
      if(res) return res;
      }
      return false;
  }
}
