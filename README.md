# 有钱人模拟器

体验花光有钱人的钱。

有钱人模拟器是一个使用React制作的模拟网上商城应用，使用Material UI作为UI框架。用户可以模拟拥有给定数目的金钱，可以在商城中购买商品，可以将钱存入理财应用中获取收益。

[Demo](lemonjing.com/rich) （该Demo有更新，会与当前repo的内容略有不同。）

欢迎Star。

## 截图

![主页](screenshots/main.jpg)![主页](screenshots/cart.jpg)

## 如何使用

```
npm install
npm start
```

## 如何修改商城物品

1. 修改`src/goods.json`，用如下格式表示商品。

```json
{
    "items":[
        {
            "name": "商品1",
            "price": 100
        },
        {
            "name": "商品2",
            "price": 200
        }
    ]
}
```

2. 如果增加商品，一定要在`src/static/images/items`中增加**与商品同名的jpg格式图片**，如“商品1.jpg”

## 如何修改初始金额和余额宝利率

修改`src/container/RichSimulator`的constructor的` this.money`和` this.yuebaorate`

## 如何修改外观

修改`src/App.js`中的`theme`改变主题色，修改`src/container/RichSimulatorStyle`改变具体样式。