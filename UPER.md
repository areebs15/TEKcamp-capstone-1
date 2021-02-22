<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
Do you understand all the words used in stating the problem?

Yes I understand all of the words used in stating the problem.
--------------------------------------------------------------
What are you asked to find or show?

I am being asked to create an inventory management system by using react. This means that i need to choose a topic/business
to create a web display of there products. The site needs to show available items, allow a purchase feature (shopping cart).
and also a product description page. This will be layed out similar to any other online ecommerce site. There will be a conglomerate page of all items with short descriptions showing what it is, its price, and any other necessary descriptors. the.
The shopping cart page will display items selected by a user along with there descriptions. Inventory elements should update based on what the user does from that point.
The product display page will show individual items based on the users click. If a user wants to know more about any individual product, they can click the "more info button" to be redirected. 


Can you restate the problem in your own words?

See above.



<h2>
    2. Planning the Solution
</h2>

In order to begin planning, i am going to use some wireframing tool to layout the site. This will allow me to visualize how the site will look and will guide the development. Without this step, the site can quickly become unorderly.
I will use powerpoint to layout my site. This is because its very simple to use and makes it clear how i want to move forward with the project.
I need to have multiple views on this site. The views needed are as follows.

List of products with the ability to purchase.

List of products and their extended details.

A shooping cart to store items that the user intends on purchasing.

-- A breakdown of each views needs will be in the next step. --

<h2>
    3. Executing the Plan
</h2>
* Creating the main page
    the main page will be home to the main product view. This will look similar to any modern ecommerce site. there will be an image of the product along with its name, price and a purchase button. 
    The purchase button will need to add the inventory item that it is connected to into the shopping cart.
    
    The individual product layout will look as follows
    ------------------------------
    |Image| Name: ItemName       | 
    |Price: $20.00 | Add To Cart |
    ------------------------------
* Creating the product views page
    The product views page will list more information about each individual item. This is more for a moderator of the site rather than a consumer. it needs to display the following.
    Item name
    Item price
    Item Serial Number
    Item Category
    Item Quantity
    Item ThumbNail

* Creating the shopping cart view
    The shopping cart for my site will be located on the same view as the main page. The purpose of this is to entice users to stay on the site and continue to look for more items. I personally believe that having a seperate view discourages further purchases.
    
    The shopping cart should list the item name, price and a delete option.
    The delete option should remove the item from the shopping cart.

<h2>
    4. Reflection / Refactor
</h2>
* when i started this project i began with the main page view. Because of this i didnt tie in the data on the main page to the data from the JSON object. I think that if i had done this it would have been much easier to sift thhrough the different information for each item slot. I plan on adding this to the site now that i realized how important it is.

Another change i need to make is how the shopping cart gets the price data. It relates to the problem mentioned above, but i also could have done it much more elegently. As it stands, i take in the item text content and put them into the array. I them take the position in the srray that holds the price and add it from there. If i used objects from the JSON file, i could have specificied the specific key needed (price).
