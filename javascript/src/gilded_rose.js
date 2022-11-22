class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let itemName = this.items[i].name;
      let itemQuality = this.items[i].quality;
      let itemSellIn = this.items[i].sellIn;

      if (itemName != 'Aged Brie' && itemName != 'Backstage passes to a TAFKAL80ETC concert') {
        if (itemQuality > 0 && itemName != 'Sulfuras, Hand of Ragnaros') {
            itemQuality--;
        } 
      } else {
        if (itemQuality < 50) {
          itemQuality++;
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert' && itemSellIn < 11 && itemQuality < 50) {
            itemQuality++;
            if (itemSellIn < 6 && itemQuality < 50) {
              itemQuality++;
            }
          }
        }
      }

      itemSellIn = this.reduceSellIn(itemName, itemSellIn)

      
      if (itemSellIn < 0) {
        if (itemName != 'Aged Brie') {
          if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemQuality > 0 && itemName != 'Sulfuras, Hand of Ragnaros') {
                itemQuality--;
            }
          } else {
            itemQuality = 0;
          }
        } else {
          if (itemQuality < 50) {
            itemQuality++;
          }
        }
      }

      this.items[i].name = itemName;
      this.items[i].quality = itemQuality;
      this.items[i].sellIn = itemSellIn;
    }

    return this.items;
  }

  reduceSellIn(itemName, itemSellIn) {
    if (itemName != 'Sulfuras, Hand of Ragnaros') {
      return itemSellIn - 1;
    }
    return itemSellIn;
  }
}
module.exports = {
  Item,
  Shop
}
