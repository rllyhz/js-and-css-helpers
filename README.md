# **Library for starting web project**

### **Features :**

1. **JavaScript Helper for client operation**
    1. Selecting element easily.
    2. Showing and hiding elemnt easily.
    3. Clicking element easily.
    4. Manage classes of element easily.
    4. Manage attributes of element easily.
    4. Add styles to element easily.
    4. Add an event to element easily.

2. **CSS Helper for styling**
    1. Grid Systems support.
    2. Margin and padding helper classes.
    3. Theme preferences.

<br>

# Javascript Helpers

This javascript helper is the **_()** function that can help us to manage element in javascript.

<br>

### **Available Methods**

- **_.get()_** method, to get the selected element.

- **_.click()_** method, to click the selected element.

- **_.hide()_** method, to the selected element disappear.

- **_.show()_** method, to make the selected element appear.

- **_.addClass()_** method, to add new class to the selected element.

- **_.removeClass()_** method, to remove existing class in the selected element.

- **_.toggle()_** method, to toggle a class in the selected element.

- **_.attribute()_** method, to manage (_get and set_) attributes of the selected element.

- **_.style()_** method, to add **a style** to the selected element.

- **_.styles()_** method, to add **some styles** to the selected element.

- **_.on()_** method, to add **any event** to the selected element.

- **_.onClick()_** method, to add a new **click event** to the selected element.

- **_.onHover()_** method, to add a new **mouseenter event** to the selected element.

- **_.onUnhover()_** method, to add a new **mouseout event** to the selected element.

- **_.removeEvent()_** method, to remove existing event in the selected element.

<br>

### **Usage**

#### **Select and get element**
In order to select an element using this helper, use this code below :

```js

/* _(cssScelector) */

// For example
_(".nav-bar")

```

This is just like **_document.querySelector("cssSelector")_**. They are technically the same. But, The result are not the same. The result has many methods you can run to. For example :

```js

_("div").get() // to get the selected element.

```

**But, keep in mind**. As default, the **.get()** method always returns only **one active element**. It means that only the first selected element will be returned. For example in the previous code :

```js

_("div").get() // this returns only the first selected element.

```

and it will also effect to all of the available methods, running for only the active element. If you want to change this behavior, set all of the selected elements to be an active state, by passing an option like this:

```js

_("div", { all: true }).get() // 'all' default value is false

```

#### **Hide and show element**

```js

// hide element
_(".sidebar").hide()

// show element
_(".sidebar").show()

```

#### **Click element**

```js
// click element
_("#btn").click()
```

#### **Manange classes of element**

```js

// add new class
_("button").addClass("btn-secondary")

// remove an existing class
_("button").removeClass("btn-secondary")

// toggle a class
_("button").toggle("isClicked")

```

#### **Manange classes of element**

```js

// get value of attribute named class
console.log(_("button").attribute("class"))

// set attribute named class to "newClass"
_("button").attribute("class", "isClicked")

```

#### **Add styles to element**

```js

// set a style
_("button").style("color", "aliceblue")

// set some styles
_("button").styles({
   backgroundColor: "blue",
   color: "white",
   fontSize: "2rem"
})

```


#### **Add styles to element**

```js

// add on click event
_("button").onClick(e => alert("clicked."))

// add on mouse enter event
_("button").onHover(e => alert("Mouse enter."))

// add on mouse out event
_("button").onUnhover(e => alert("Mouse out."))

// add any event to the element
_("button").on("click", e => alert("Clicked."))


// remove existing event
function callback(e) {
  console.log(e)
}

_("button").onClick(callback)

_("button").removeEvent("click", callback)

```

<br>

# CSS Helpers

CSS Helper is css library contains a bunch of classes ready to use, like py-2 to indicate that the element has **_padding-top)** and **_padding-bottom_** with the value is 2 (could be _2rem_, _2px_, _2%_, etc).

### **Usage**

#### **Grid systems**

In index.html file, we have bunch of lines of code as below :
```html


```

```css



```

#### **Margin and Padding**