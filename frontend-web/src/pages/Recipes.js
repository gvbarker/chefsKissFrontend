import React, { useState } from 'react'


// The link below is how to get checkbox values, not sure if this would be my job so just having it here for later reference
// https://www.youtube.com/watch?v=ewC42fwEYPI

// need to add a better styling once i get everything down + add more if people have things I missed
export default function Recipes() {
  return (
    <div className="recipe">
      
      <h1>Meat</h1>
      <body>
      Beef:<br></br>
      <input type="checkbox"  />Brisket
      <input type="checkbox"  />Chuck
      <input type="checkbox"  />Flank
      <input type="checkbox"  />Ground beef<br></br>
      Chicken:<br></br>
      <input type="checkbox"  />Breast
      <input type="checkbox"  />Leg
      <input type="checkbox"  />Shredded<br></br>
      Fish:<br></br>
      <input type="checkbox"  />Catfish
      <input type="checkbox"  />Cod
      <input type="checkbox"  />Eel
      <input type="checkbox"  />Halibut
      <input type="checkbox"  />Herring
      <input type="checkbox"  />Salmon
      <input type="checkbox"  />Sardines
      <input type="checkbox"  />Tilapia
      <input type="checkbox"  />Trout
      <input type="checkbox"  />Tuna<br></br>
      Pork:<br></br>
      <input type="checkbox"  />Bacon
      <input type="checkbox"  />Ham
      <input type="checkbox"  />Hot dog
      <input type="checkbox"  />Salami
      <input type="checkbox"  />Sausage<br></br>
      Venison:<br></br>
      <input type="checkbox"  />Back loin
      <input type="checkbox"  />Back ham
      <input type="checkbox"  />Front shoulder 
      <input type="checkbox"  />Sirloin<br></br>
      </body>
      
      <h1>Vegtables</h1>
      <body>
      No special prep:<br></br>
      <input type="checkbox"  />Asparagus<br></br>
      <input type="checkbox"  />Broccoli<br></br>
      <input type="checkbox"  />Brussel sprouts<br></br>
      <input type="checkbox"  />Carrot<br></br>
      <input type="checkbox"  />Cauliflower<br></br>
      <input type="checkbox"  />Celery<br></br>
      <input type="checkbox"  />Pickle<br></br>
      Leafy greens:<br></br>
      <input type="checkbox"  />Cabbage
      <input type="checkbox"  />Kale
      <input type="checkbox"  />Chopped lettuce
      <input type="checkbox"  />Shredded lettuce
      <input type="checkbox"  />Spinach<br></br>
      Pepper:<br></br>
      <input type="checkbox"  />Banana pepper
      <input type="checkbox"  />Bell pepper
      <input type="checkbox"  />Cayenne pepper
      <input type="checkbox"  />Habañero pepper
      <input type="checkbox"  />Jalapeño pepper
      <input type="checkbox"  />Tabasco pepper<br></br>
      Potato:<br></br>
      <input type="checkbox"  />Potato
      <input type="checkbox"  />Sweet potato
      <input type="checkbox"  />Yam<br></br>
      </body>

      <h1>Fruit</h1>
      <body>
      No special prep:<br></br>
      <input type="checkbox"  />Cucumber<br></br>
      <input type="checkbox"  />Kiwi<br></br>
      <input type="checkbox"  />Mango<br></br>
      <input type="checkbox"  />Orange<br></br>
      <input type="checkbox"  />Pear<br></br>
      <input type="checkbox"  />Pumpkin<br></br>
      <input type="checkbox"  />Watermelon<br></br>
      Apple:<br></br>
      <input type="checkbox"  />Apple
      <input type="checkbox"  />Diced
      <input type="checkbox"  />Sauce<br></br>
      Blackberry:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Blueberry:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Cherry:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Grape:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly
      <input type="checkbox"  />raisen<br></br>
      Peach:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Raspberry:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Strawberry:<br></br>
      <input type="checkbox"  />Fruit
      <input type="checkbox"  />Jam
      <input type="checkbox"  />Jelly<br></br>
      Tomatoes:<br></br>
      <input type="checkbox"  />Cherry
      <input type="checkbox"  />Diced<br></br>
      </body>
  
      <h1>Other</h1>
      <body>
      Butter:<br></br>
      <input type="checkbox"  />Almond Butter
      <input type="checkbox"  />Butter
      <input type="checkbox"  />Peanut Butter<br></br>
      Dairy:<br></br>
      <input type="checkbox"  />Cheese
      <input type="checkbox"  />Eggs
      <input type="checkbox"  />Milk<br></br>
      Grains:<br></br>
      <input type="checkbox"  />Brown rice
      <input type="checkbox"  />Bread
      <input type="checkbox"  />Oatmeal
      <input type="checkbox"  />Pasta
      <input type="checkbox"  />White rice<br></br>
      Sauce:<br></br>
      <input type="checkbox"  />Alfredo
      <input type="checkbox"  />Barbeque sauce
      <input type="checkbox"  />sriracha
      <input type="checkbox"  />Tabasco Sauce<br></br>
      Spices:<br></br>
      <input type="checkbox"  />Cinnamon
      <input type="checkbox"  />Cumin
      <input type="checkbox"  />Dried herbs
      <input type="checkbox"  />Ginger
      <input type="checkbox"  />Nutmeg
      <input type="checkbox"  />Vanilla extract<br></br>
      Sugar:<br></br>
      <input type="checkbox"  />Brown Sugar
      <input type="checkbox"  />White sugar<br></br>
      </body>
    </div>
  )
}
